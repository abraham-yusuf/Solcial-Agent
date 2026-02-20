/** Program ID from Anchor deploy (matches .env / IDL). */
export const PROGRAM_ID =
  process.env.NEXT_PUBLIC_PROGRAM_ID ??
  "BANU9njsMsKqgkHTQXKjnVJjJSp5cTRPUHbo56hNPd4V";

/** Solana RPC endpoint. */
export const SOLANA_RPC_URL =
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? "https://api.devnet.solana.com";

/** Network label used by wallet adapter. */
export const SOLANA_NETWORK =
  (process.env.NEXT_PUBLIC_SOLANA_NETWORK as "devnet" | "mainnet-beta") ??
  "devnet";

/** Maximum characters for a post. */
export const MAX_POST_LENGTH = 280;

/** Maximum characters for username. */
export const MAX_USERNAME_LENGTH = 32;

/** Maximum characters for bio. */
export const MAX_BIO_LENGTH = 256;
