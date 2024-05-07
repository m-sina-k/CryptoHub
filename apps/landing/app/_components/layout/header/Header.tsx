import React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@ui/index"
import Logo from "~/app/_components/layout/Logo"

const ThemeSwitcher = dynamic(async () => await import("./ThemeSwitcher"), {
  ssr: false,
})

function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Logo />
      <nav className="bg-twc_accent border-1 flex items-center gap-8 rounded-full px-8 py-0 backdrop-blur-lg">
        <Button variant="link" className="p-0 capitalize">
          <Link href="/">market</Link>
        </Button>
        <Button variant="link" className="p-0 capitalize">
          <Link href="/">telegram bot</Link>
        </Button>
        <Button variant="link" className="p-0 capitalize">
          <Link href="/">source code</Link>
        </Button>
      </nav>
      <ThemeSwitcher />
    </header>
  )
}

export default Header
