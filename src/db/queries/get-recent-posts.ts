import { desc } from "drizzle-orm";
import { db } from "../index";
import { posts } from "../schema";

/**
 * Fetches the most recent posts from the indexed database.
 * @param limit - Maximum number of posts to return (default 20).
 */
export async function getRecentPosts(limit = 20) {
  return db
    .select()
    .from(posts)
    .orderBy(desc(posts.onchainTimestamp))
    .limit(limit);
}
