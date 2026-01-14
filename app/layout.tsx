import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Simplilearn Dallas Round Table | February 2026",
  description: "Exclusive invite-only roundtable on AI-driven workforce transformation. Join CHROs, CLOs, and enterprise leaders in Dallas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary-orange selection:text-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
