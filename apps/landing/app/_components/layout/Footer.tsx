import React from "react"
import Link from "next/link"
import { Button } from "@ui/components"
import Logo from "~/app/_components/layout/Logo"
import { GithubIcon, LinkedinIcon, SendIcon } from "lucide-react"

const socialMedias = [
  {
    id: 1,
    icon: <GithubIcon size={16} />,
    url: "https://github.com/m-sina-k/CryptoHub",
  },
  {
    id: 2,
    icon: <SendIcon size={16} />,
    url: "https://t.me/cphub_price_bot",
  },
  {
    id: 3,
    icon: <LinkedinIcon size={16} />,
    url: "https://www.linkedin.com/in/m-sina-k/",
  },
]

function Footer() {
  return (
    <footer className="border-1 border-twc_border mb-5 mt-10 flex items-center justify-between rounded-lg p-5 backdrop-blur-lg">
      <section>
        <Logo />
      </section>
      <section className="flex items-center gap-3">
        {socialMedias.map((socialMedia) => (
          <Button
            key={socialMedia.id}
            variant="ghost"
            className="border-1 flex size-8 p-1"
          >
            <Link target="_blank" href={socialMedia.url}>
              {socialMedia.icon}
            </Link>
          </Button>
        ))}
      </section>
    </footer>
  )
}

export default Footer
