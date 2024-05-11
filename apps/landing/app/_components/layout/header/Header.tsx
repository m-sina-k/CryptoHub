import React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui/index"
import Logo from "~/app/_components/layout/Logo"
import { LinkedinIcon, MenuIcon, SendIcon } from "lucide-react"

const ThemeSwitcher = dynamic(async () => await import("./ThemeSwitcher"), {
  ssr: false,
})

const links = [
  {
    id: 1,
    text: "market",
    url: "/",
  },
  {
    id: 2,
    text: "Telegram bot",
    url: "https://t.me/cphub_price_bot",
  },
  {
    id: 3,
    url: "https://github.com/m-sina-k/CryptoHub",
    text: "source code",
  },
]

function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Logo />
      <nav className="bg-twc_accent border-1 hidden items-center gap-8 rounded-full px-8 py-0 backdrop-blur-lg sm:flex">
        {links.map((link) => (
          <Button key={link.id} variant="link" className="p-0 capitalize">
            <Link target="_blank" href={link.url}>
              {link.text}
            </Link>
          </Button>
        ))}
      </nav>
      <div className="flex gap-2">
        <section className="block sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Button variant="ghost" className="border-1 flex h-8 w-8 p-1.5">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {links.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <Link target="_blank" href={link.url} className="capitalize">
                    {link.text}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
