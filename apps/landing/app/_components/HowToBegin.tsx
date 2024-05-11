import React from "react"
import Image from "next/image"
import { BitcoinIcon, ShieldQuestion, UserIcon, WalletIcon } from "lucide-react"
import EarthImage from "public/assets/images/earth.png"

const stepsToBegin = [
  {
    id: 1,
    title: "Register",
    icon: <UserIcon />,
    desc: "Start you crypto journey by signing up and completing your profile in CryptoHub.",
  },
  {
    id: 2,
    title: "Connect wallet",
    icon: <WalletIcon />,
    desc: "Connect your Trust Wallet, or any other wallet you have to make transactions.",
  },
  {
    id: 3,
    title: "Start trading",
    icon: <BitcoinIcon />,
    desc: "Once you have you wallet connected to your profile, you can start trading coins.",
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
      <div className="mt-10 grid grid-cols-12 gap-5">
        <section className="col-span-12 flex flex-1 justify-center md:col-span-5">
          <Image
            className="max-w-full object-contain"
            src={EarthImage}
            alt="earth"
          />
        </section>
        <section className="col-span-12 flex flex-1 flex-col justify-center pl-0 md:col-span-7 md:pl-5">
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
