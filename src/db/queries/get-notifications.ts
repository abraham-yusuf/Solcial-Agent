import { eq, desc } from "drizzle-orm";
import { db } from "../index";
import { notifications } from "../schema";

/**
 * Fetches notifications for a given wallet, newest first.
 * @param wallet - Solana wallet public key (base58).
 * @param limit - Maximum number of notifications to return (default 20).
 */
export async function getNotifications(wallet: string, limit = 20) {
  return db
    .select()
    .from(notifications)
    .where(eq(notifications.recipientWallet, wallet))
    .orderBy(desc(notifications.createdAt))
    .limit(limit);
}
