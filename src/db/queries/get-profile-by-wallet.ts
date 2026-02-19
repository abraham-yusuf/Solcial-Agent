import { eq } from "drizzle-orm";
import { db } from "../index";
import { profiles } from "../schema";

/**
 * Looks up an indexed profile by wallet address.
 * @param wallet - Solana wallet public key (base58).
 * @returns The profile row or undefined if not found.
 */
export async function getProfileByWallet(wallet: string) {
  const rows = await db
    .select()
    .from(profiles)
    .where(eq(profiles.wallet, wallet))
    .limit(1);
  return rows[0] ?? null;
}
