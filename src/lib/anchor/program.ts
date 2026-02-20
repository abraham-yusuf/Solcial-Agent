import { AnchorProvider, Program, Idl } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { PROGRAM_ID } from "../constants";
import { getConnection } from "../solana/connection";
import idl from "../../../anchor/idl/social_network.json";

/**
 * Builds an Anchor Program instance bound to the connected wallet.
 * @param wallet - The wallet adapter wallet (provides signTransaction).
 * @param connection - Optional Solana connection (defaults to env-based).
 */
export function getProgram(wallet: AnchorWallet, connection?: Connection) {
  const conn = connection ?? getConnection();
  const provider = new AnchorProvider(conn, wallet, {
    commitment: "confirmed",
  });
  return new Program(idl as Idl, provider);
}

/** Program public key derived from NEXT_PUBLIC_PROGRAM_ID. */
export const programId = new PublicKey(PROGRAM_ID);
