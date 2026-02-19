import { eq } from "drizzle-orm";
import { db } from "../../src/db";
import { posts, notifications, type NewNotification } from "../schema";

/**
 * Indexer handler for the LikeAdded Anchor event.
 * Called by Solder when a LikeAdded event is detected on-chain.
 *
 * @param event - Decoded LikeAdded event data from the Anchor program.
 */
export async function handleLikeAdded(event: {
  liker: string;
  post: string;
  newLikes: number;
}) {
  // Update the likes count on the indexed post
  await db
    .update(posts)
    .set({ likes: event.newLikes })
    .where(eq(posts.pdaAddress, event.post));

  // Look up the post author to send them a notification
  const rows = await db
    .select({ authorWallet: posts.authorWallet })
    .from(posts)
    .where(eq(posts.pdaAddress, event.post))
    .limit(1);

  const postRow = rows[0];
  if (postRow) {
    const notification: NewNotification = {
      recipientWallet: postRow.authorWallet,
      type: "like",
      actorWallet: event.liker,
      postPda: event.post,
      message: `Your post received a new like! (${event.newLikes} total)`,
    };

    await db.insert(notifications).values(notification);
  }
}
