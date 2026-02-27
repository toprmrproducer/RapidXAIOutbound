import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RapidXAI - Scale Your Revenue Momentum",
  description: "The most cost-effective AI Inbound and Outbound voice agent solution in the Indian market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-noise text-foreground bg-background`}>
        {children}
      </body>
    </html>
  );
}
