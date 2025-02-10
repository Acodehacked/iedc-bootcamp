import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';


const myFont = localFont({ src: './font/ClashDisplay-Variable.woff2' })

export const metadata: Metadata = {
  title: "IEDC BootCamp Sjcet",
  description: "Created by Abin Antony",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} light`}
      >
        {children}
      </body>
    </html>
  );
}
