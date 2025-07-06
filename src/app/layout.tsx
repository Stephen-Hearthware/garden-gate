import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garden Gate",
  description: "A calm case review tool for community garden conflicts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-gardenStone"
        style={{
          background:
            "radial-gradient(circle at top left, #D4EAC8 0%, #F9F9F6 80%)",
        }}
      >
        <header className="bg-white/60 backdrop-blur-md">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl text-olive">
              Garden Gate
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/overview" className="hover:underline">
                Overview
              </Link>
              <Link href="/cases" className="hover:underline">
                Cases
              </Link>
              <Link href="/guidelines" className="hover:underline">
                Guidelines
              </Link>
            </div>
          </nav>
        </header>
        <main className="px-4 py-8 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
