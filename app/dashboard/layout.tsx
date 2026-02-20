import { WalletConnectButton } from "@/components/atoms/WalletConnectButton";

/** Dashboard layout — includes top navigation bar with wallet button. */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Top navigation */}
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold text-purple-400">
            OnchainSocial AI
          </h1>
          <WalletConnectButton />
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-2xl px-4 py-6">{children}</main>
    </div>
  );
}
