import { pgTable, text, varchar, timestamp, serial } from "drizzle-orm/pg-core";

/** Indexed profiles table — mirrors on-chain Profile PDA. */
export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  /** Wallet public key (base58). */
  wallet: varchar("wallet", { length: 64 }).notNull().unique(),
  /** On-chain PDA address (base58). */
  pdaAddress: varchar("pda_address", { length: 64 }).notNull().unique(),
  /** Username (max 32 chars, matching on-chain constraint). */
  username: varchar("username", { length: 32 }).notNull(),
  /** Short bio (max 256 chars). */
  bio: varchar("bio", { length: 256 }).notNull().default(""),
  /** Timestamp when indexed. */
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
