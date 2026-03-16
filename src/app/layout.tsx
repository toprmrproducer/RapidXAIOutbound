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
  title: "CR/AI — AI Voice Agents for Every Indian Business",
  description:
    "Enterprise-grade AI inbound and outbound voice agents. Your 24/7 receptionist and SDR — built for India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Geist — display / headline font from Vercel */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css"
        />
        {/* Plus Jakarta Sans — premium hero headline font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap"
        />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
