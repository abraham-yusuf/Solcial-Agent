export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold">OnchainSocial AI</h1>
      <p className="mb-8 text-lg text-gray-400">
        AI-powered onchain social network on Solana
      </p>
      <div className="rounded-lg border border-gray-700 bg-gray-900 px-8 py-6 text-center">
        <p className="text-gray-300">Connect Wallet to get started</p>
        <button
          className="mt-4 rounded-md bg-purple-600 px-6 py-2 font-medium text-white transition-colors hover:bg-purple-700"
          disabled
        >
          Connect Wallet (coming soon)
        </button>
      </div>
    </main>
  );
}
