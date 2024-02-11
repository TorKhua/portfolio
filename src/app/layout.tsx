import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "alejandro(tm);",
  description: "Portfolio Alejandro Torcuato",
};
const myFont = localFont({ src: 'JetBrainsMono-Regular.woff2' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${myFont.className} dark:bg-d_bg bg-l_bg text-l_fg dark:text-d_fg`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
