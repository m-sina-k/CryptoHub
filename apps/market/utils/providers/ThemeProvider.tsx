"use client"

import Head from "next/head"
import { useStore } from "~/store"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useStore((state) => state.theme)
  return (
    <html lang="en" className={theme.value}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      {children}
    </html>
  )
}
