/**
 * Solder configuration — defines which Anchor programs and events to monitor.
 * Solder watches on-chain events and pipes them through indexer handlers
 * to insert/update the PostgreSQL database via Drizzle.
 */

/** Program ID for the social_network Anchor program. */
export const PROGRAM_ID =
  process.env.NEXT_PUBLIC_PROGRAM_ID ??
  "BANU9njsMsKqgkHTQXKjnVJjJSp5cTRPUHbo56hNPd4V";

/** Solana cluster RPC endpoint. */
export const RPC_URL =
  process.env.SOLANA_RPC_URL ?? "https://api.devnet.solana.com";

/** Events to watch from the social_network program. */
export const WATCHED_EVENTS = ["PostCreated", "LikeAdded"] as const;

export type WatchedEvent = (typeof WATCHED_EVENTS)[number];

/** Full Solder configuration object for programmatic use. */
export const solderConfig = {
  cluster: "devnet" as const,
  rpcUrl: RPC_URL,
  programs: [
    {
      programId: PROGRAM_ID,
      idlPath: "./anchor/idl/social_network.json",
      events: [...WATCHED_EVENTS],
    },
  ],
};
