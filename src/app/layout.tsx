import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter — body / subtext font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RapidXAI — Book More Meetings, Automatically",
  description:
    "Enterprise-grade AI inbound and outbound voice agents. Your 24/7 receptionist and SDR — built for India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Geist — display / headline font from Vercel */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
