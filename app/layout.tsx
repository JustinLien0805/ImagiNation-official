import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImagicNation",
  description: "Interactive AI Texbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <main className="flex reletive min-h-screen max-w-[100vw] overflow-x-hidden flex-col items-center bg-[#fafafa]">
          {children}
          <footer className="flex flex-col items-center w-screen bg-[#f6e0c1] p-10 gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FD513F] via-[#E0218C] to-[#1177F7]">
              ImagicNation
            </h2>
            <h3 className="text-xl font-normal tracking-tight text-[#363636] px-2 text-center">
              Copyright © 2023 ImagicNation, Inc. All rights reserved.
            </h3>
          </footer>
        </main>
      </body>
    </html>
  );
}
