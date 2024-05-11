import React from "react"
import {
  CreditCardIcon,
  DropletIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
} from "lucide-react"

const features = [
  {
    id: 1,
    desc: "Transfer via bank and Apple/Google Pay",
    icon: <CreditCardIcon />,
  },
  {
    id: 2,
    desc: "Committed to regulatory compliance and security certifications",
    icon: <ShieldCheckIcon />,
  },
  {
    id: 3,
    desc: "Trusted by over 100 thousand users worldwide",
    icon: <UsersRoundIcon />,
  },
  {
    id: 4,
    desc: "Deep order book liquidity in all market conditions",
    icon: <DropletIcon />,
  },
]

function Features() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4">
      {features.map((feature) => (
        <section key={feature.id} className="flex flex-col items-center">
          <span className="text-twc_primary">{feature.icon}</span>
          <p className="text-twc_secondary mt-3 text-center">{feature.desc}</p>
        </section>
      ))}
    </div>
  )
}

export default Features
