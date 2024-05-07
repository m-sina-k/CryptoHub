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
    desc: "Trusted by over 100 million users worldwide",
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
    <div className="mt-16 flex gap-5">
      {features.map((feature) => (
        <section key={feature.id} className="flex flex-col items-center">
          {feature.icon}
          <p className="mt-3 text-center">{feature.desc}</p>
        </section>
      ))}
    </div>
  )
}

export default Features
