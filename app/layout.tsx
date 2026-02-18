import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnchainSocial AI",
  description:
    "AI-powered onchain social network on Solana – Graveyard Hackathon 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
