import type { Metadata } from "next"

import "./globals.css"

import localFont from "next/font/local"
import Background from "~/app/_components/layout/Background"
import ThemeProvider from "~/app/utils/providers/ThemeProvider"

const blink = localFont({
  src: [
    {
      path: "../public/fonts/blinkmacsystemfont-medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/blinkmacsystemfont-semibold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/blinkmacsystemfont-bold.ttf",
      weight: "500",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-BlinkMacSystemFont",
})

export const metadata: Metadata = {
  title: "CryptoHub",
  description:
    "Over 100 thousand users buy, sell, and trade Bitcoin, Ethereum, NFTs and more on CryptoHub. Join the World's leading crypto trading platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <body className={blink.className}>
        <Background>{children}</Background>
      </body>
    </ThemeProvider>
  )
}
