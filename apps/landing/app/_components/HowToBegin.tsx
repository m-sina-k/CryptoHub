import React from "react"
import Image from "next/image"
import { KeyRoundIcon, ShieldQuestion } from "lucide-react"
import EarthImage from "public/assets/images/earth.png"

const stepsToBegin = [
  {
    id: 1,
    title: "Register",
    icon: <KeyRoundIcon />,
    desc: "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
  },
  {
    id: 2,
    title: "Connect wallet",
    icon: <KeyRoundIcon />,
    desc: "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
  },
  {
    id: 3,
    title: "Start trading",
    icon: <KeyRoundIcon />,
    desc: "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
  },
]

function HowToBegin() {
  return (
    <div className="border-1 border-twc_border mt-16 rounded-lg px-12 py-6 backdrop-blur-lg">
      <section className="flex flex-col items-center">
        <span className="border-1 border-twc_border text-twc_primary mb-1 flex size-10 items-center justify-center rounded-full">
          <ShieldQuestion />
        </span>
        <p className="text-twc_primary text-xl font-bold">How To Begin</p>
      </section>
      <div className="mt-10 flex gap-2">
        <section className="flex-1">
          <Image className="max-w-[350px]" src={EarthImage} alt="earth" />
        </section>
        <section className="flex flex-1 flex-col justify-center">
          {stepsToBegin.map((step) => (
            <div key={step.id} className="mb-5">
              <section className="text-twc_primary flex items-center gap-2">
                {step.icon}
                <p>{step.title}</p>
              </section>
              <p className="text-twc_secondary mt-2">{step.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HowToBegin
