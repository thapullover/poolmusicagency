import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Pool Music Agency | Agenzia di Promoting per Artisti",
  description:
    "Agenzia di promoting musicale. Gestiamo i grandi artisti e le nostre produzioni con energia e autenticità.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-neo-canvas font-sans antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
