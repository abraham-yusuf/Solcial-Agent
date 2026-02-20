"use client";

import { useState, useCallback } from "react";
import { useWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY } from "@solana/web3.js";
import { PostCard } from "@/components/molecules/PostCard";
import { CreatePostForm } from "@/components/molecules/CreatePostForm";
import { getProgram, programId } from "@/lib/anchor";

interface PostData {
  id: number;
  pdaAddress: string;
  authorWallet: string;
  content: string;
  likes: number;
  onchainTimestamp: number;
}

interface FeedListProps {
  initialPosts: PostData[];
}

/**
 * Renders the post creation form and a scrollable list of posts.
 * Handles on-chain create_post and like_post via Anchor.
 */
export function FeedList({ initialPosts }: FeedListProps) {
  const [posts, setPosts] = useState<PostData[]>(initialPosts);
  const [likingId, setLikingId] = useState<string | null>(null);
  const wallet = useAnchorWallet();
  const { publicKey } = useWallet();

  /** Sends a create_post transaction through Anchor. */
  const handleCreatePost = useCallback(
    async (content: string) => {
      if (!wallet || !publicKey) {
        throw new Error("Please connect your wallet first.");
      }

      const program = getProgram(wallet);

      const timestamp = Math.floor(Date.now() / 1000);

      const tx = await (program.methods as any)
        .createPost(content)
        .accounts({
          authority: publicKey,
          clock: SYSVAR_CLOCK_PUBKEY,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      // Derive the post PDA used by the program: seeds = ["post", authority, timestamp]
      const timestampBuf = Buffer.alloc(8);
      timestampBuf.writeBigInt64LE(BigInt(timestamp));
      const [postPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("post"), publicKey.toBuffer(), timestampBuf],
        programId
      );

      // Optimistically add the post to the local feed
      const newPost: PostData = {
        id: Date.now(),
        pdaAddress: postPda.toBase58(),
        authorWallet: publicKey.toBase58(),
        content,
        likes: 0,
        onchainTimestamp: timestamp,
      };
      setPosts((prev) => [newPost, ...prev]);
    },
    [wallet, publicKey]
  );

  /** Sends a like_post transaction through Anchor. */
  const handleLike = useCallback(
    async (pdaAddress: string) => {
      if (!wallet || !publicKey) return;

      setLikingId(pdaAddress);
      try {
        const program = getProgram(wallet);

        await (program.methods as any)
          .likePost()
          .accounts({
            post: new PublicKey(pdaAddress),
            authority: publicKey,
          })
          .rpc();

        // Optimistically update likes
        setPosts((prev) =>
          prev.map((p) =>
            p.pdaAddress === pdaAddress ? { ...p, likes: p.likes + 1 } : p
          )
        );
      } finally {
        setLikingId(null);
      }
    },
    [wallet, publicKey]
  );

  return (
    <div className="space-y-4">
      {publicKey && <CreatePostForm onSubmit={handleCreatePost} />}

      {posts.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          No posts yet. Be the first to post!
        </p>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <PostCard
              key={post.pdaAddress}
              pdaAddress={post.pdaAddress}
              authorWallet={post.authorWallet}
              content={post.content}
              likes={post.likes}
              onchainTimestamp={post.onchainTimestamp}
              onLike={publicKey ? handleLike : undefined}
              isLiking={likingId === post.pdaAddress}
            />
          ))}
        </div>
      )}
    </div>
  );
}
