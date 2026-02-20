import Link from "next/link";
import { WalletConnectButton } from "@/components/atoms/WalletConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold">OnchainSocial AI</h1>
      <p className="mb-8 text-lg text-gray-400">
        AI-powered onchain social network on Solana
      </p>
      <div className="flex flex-col items-center gap-6 rounded-lg border border-gray-700 bg-gray-900 px-8 py-6">
        <p className="text-gray-300">Connect your Solana wallet to get started</p>
        <WalletConnectButton />
        <Link
          href="/dashboard/feed"
          className="text-sm text-purple-400 underline transition-colors hover:text-purple-300"
        >
          Go to Feed →
        </Link>
      </div>
    </main>
  );
}
