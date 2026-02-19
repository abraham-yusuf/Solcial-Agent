import { db } from "../../src/db";
import { posts, type NewPost } from "../schema";

/**
 * Indexer handler for the PostCreated Anchor event.
 * Called by Solder when a new PostCreated event is detected on-chain.
 *
 * @param event - Decoded PostCreated event data from the Anchor program.
 */
export async function handlePostCreated(event: {
  author: string;
  post: string;
  content: string;
  timestamp: number;
}) {
  const newPost: NewPost = {
    pdaAddress: event.post,
    authorWallet: event.author,
    content: event.content,
    likes: 0,
    onchainTimestamp: event.timestamp,
  };

  await db.insert(posts).values(newPost).onConflictDoNothing();
}
