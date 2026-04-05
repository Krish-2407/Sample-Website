import type { Metadata } from "next";
import { Noto_Serif, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "L'ÉCLAT Gastronomy | The Art of Refined Dining",
  description: "An immersive gastronomic journey where classical techniques meet contemporary vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} ${cormorant.variable} bg-background text-on-surface font-body selection:bg-primary-fixed-dim antialiased min-h-full flex flex-col`}
      >
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
