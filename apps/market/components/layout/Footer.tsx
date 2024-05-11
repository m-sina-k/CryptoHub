import process from "process"
import React from "react"
import Link from "next/link"
import { Button } from "@ui/components"
import Logo from "~/components/common/Logo"
import { GithubIcon, HomeIcon, LinkedinIcon, SendIcon } from "lucide-react"

const links = [
  {
    id: 1,
    url: "https://crypto-hub-landing.vercel.app",
    icon: <HomeIcon size={16} />,
  },
  {
    id: 2,
    url: "https://t.me/cphub_price_bot",
    icon: <SendIcon size={16} />,
  },
  {
    id: 3,
    icon: <GithubIcon size={16} />,
    url: "https://github.com/m-sina-k/CryptoHub",
  },
  {
    id: 4,
    icon: <LinkedinIcon size={16} />,
    url: "https://www.linkedin.com/in/m-sina-k/",
  },
]

function Footer() {
  return (
    <div className="bg-twc_foreground mt-10 py-5">
      <div className="container flex flex-wrap justify-between gap-4">
        <div>
          <section>
            <Logo />
          </section>
          <section className="mt-2">
            <p className="text-twc_muted text-xs">
              Copyright 2024 CryptoHub.com. All rights reserved.
            </p>
          </section>
        </div>

        <section className="flex items-center gap-3">
          {links.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className="border-1 flex size-8 p-1"
            >
              <Link target="_blank" href={link.url}>
                {link.icon}
              </Link>
            </Button>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Footer
