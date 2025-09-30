import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, MedievalSharp, EB_Garamond, UnifrakturCook } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const medievalSharp = MedievalSharp({
  variable: "--font-medieval-sharp",
  subsets: ["latin"],
  weight: "400",
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const unifrakturCook = UnifrakturCook({
  variable: "--font-fraktur",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Medieval OnlyFans",
  description: "A medieval-themed sandbox application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${unifrakturCook.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${medievalSharp.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
