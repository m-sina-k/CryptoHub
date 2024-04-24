"use client"

import { useStore } from "~/store"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useStore((state) => state.theme)
  return (
    <html lang="en" className={theme.value}>
      {children}
    </html>
  )
}
