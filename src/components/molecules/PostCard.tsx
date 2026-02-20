"use client";

import { shortenAddress, timeAgo } from "@/lib/utils/format";

interface PostCardProps {
  pdaAddress: string;
  authorWallet: string;
  content: string;
  likes: number;
  onchainTimestamp: number;
  onLike?: (pdaAddress: string) => void;
  isLiking?: boolean;
}

/** Displays a single post with content, author, timestamp, and like button. */
export function PostCard({
  pdaAddress,
  authorWallet,
  content,
  likes,
  onchainTimestamp,
  onLike,
  isLiking,
}: PostCardProps) {
  return (
    <article className="rounded-lg border border-gray-700 bg-gray-900 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-purple-400">
          {shortenAddress(authorWallet)}
        </span>
        <span className="text-xs text-gray-500">
          {timeAgo(onchainTimestamp)}
        </span>
      </div>

      <p className="mb-3 text-gray-200">{content}</p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onLike?.(pdaAddress)}
          disabled={isLiking}
          className="flex items-center gap-1 rounded-md px-3 py-1 text-sm text-gray-400 transition-colors hover:bg-gray-800 hover:text-purple-400 disabled:opacity-50"
        >
          <span>♥</span>
          <span>{likes}</span>
        </button>
      </div>
    </article>
  );
}
