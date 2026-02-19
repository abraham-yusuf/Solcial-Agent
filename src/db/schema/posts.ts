import {
  pgTable,
  text,
  varchar,
  bigint,
  timestamp,
  serial,
} from "drizzle-orm/pg-core";
import { profiles } from "./profiles";

/** Indexed posts table — mirrors on-chain Post PDA. */
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  /** On-chain PDA address (base58). */
  pdaAddress: varchar("pda_address", { length: 64 }).notNull().unique(),
  /** Author wallet public key (base58). */
  authorWallet: varchar("author_wallet", { length: 64 }).notNull(),
  /** Post content (max 280 chars). */
  content: varchar("content", { length: 280 }).notNull(),
  /** Number of likes (synced from on-chain). */
  likes: bigint("likes", { mode: "number" }).notNull().default(0),
  /** On-chain unix timestamp of post creation. */
  onchainTimestamp: bigint("onchain_timestamp", { mode: "number" }).notNull(),
  /** Timestamp when indexed into DB. */
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
