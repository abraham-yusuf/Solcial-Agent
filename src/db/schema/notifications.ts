import {
  pgTable,
  varchar,
  text,
  timestamp,
  serial,
  boolean,
} from "drizzle-orm/pg-core";

/** Notifications table — stores likes, replies, and other events for users. */
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  /** Wallet of the user who receives this notification (base58). */
  recipientWallet: varchar("recipient_wallet", { length: 64 }).notNull(),
  /** Type of notification. */
  type: varchar("type", { length: 32 }).notNull(),
  /** Wallet of the user who triggered this notification (base58). */
  actorWallet: varchar("actor_wallet", { length: 64 }).notNull(),
  /** Related post PDA address (base58), if applicable. */
  postPda: varchar("post_pda", { length: 64 }),
  /** Human-readable message summary. */
  message: text("message").notNull(),
  /** Whether the notification has been read. */
  read: boolean("read").notNull().default(false),
  /** Timestamp when created. */
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Notification = typeof notifications.$inferSelect;
export type NewNotification = typeof notifications.$inferInsert;
