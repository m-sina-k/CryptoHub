import "@cryptohub/ui/globals.css"
import "~/styles/styles.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import type { Metadata } from "next"
import localFont from "next/font/local"
import ReactQueryProvider from "~/utils/providers/ReactQueryProvider"
import ThemeProvider from "~/utils/providers/ThemeProvider"

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
  title: "CryptoHub | Market",
  description:
    "Explore top cryptocurrencies with CryptoHub, where you can find real-time price, coins market cap, price charts and historical data.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ThemeProvider>
      <body className={blink.className}>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </ThemeProvider>
  )
}
