import type { Metadata } from "next";
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
        className="min-h-screen font-body bg-gardenStone"
        style={{
          background:
            "radial-gradient(circle at top left, #D6EAF8 0%, #F9F9F6 80%)",
        }}
      >
        <main className="px-4 py-8 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl mb-8 text-center">Garden Gate</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
