"use server";

import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";

/**
 * Server action: fetches the most recent posts from the indexed DB.
 * Used by the feed page to load initial data on the server.
 */
export async function fetchFeedPosts(limit = 20) {
  try {
    return await db
      .select()
      .from(posts)
      .orderBy(desc(posts.onchainTimestamp))
      .limit(limit);
  } catch {
    // DB may not be connected during dev — return empty array gracefully
    return [];
  }
}
