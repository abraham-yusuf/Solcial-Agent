"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically imported wallet button to avoid SSR issues.
 * The wallet adapter UI requires browser APIs.
 */
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export function WalletConnectButton() {
  return (
    <WalletMultiButtonDynamic
      style={{
        backgroundColor: "#7c3aed",
        borderRadius: "0.5rem",
        fontSize: "0.875rem",
        height: "2.5rem",
      }}
    />
  );
}
