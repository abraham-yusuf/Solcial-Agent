"use client";

import { useMemo, type ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { SOLANA_RPC_URL } from "@/lib/constants";

import "@solana/wallet-adapter-react-ui/styles.css";

/**
 * Wraps the app with Solana wallet connection context.
 * Supports Phantom (more wallets can be added to the array).
 */
export function WalletProvider({ children }: { children: ReactNode }) {
  const endpoint = SOLANA_RPC_URL;
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
}
