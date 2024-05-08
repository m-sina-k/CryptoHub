import React from "react"
import Image from "next/image"
import { Building2Icon } from "lucide-react"
import chartImage from "public/assets/images/chart.png"

function WhatDoWeDo() {
  return (
    <div className="border-1 border-twc_border mt-10 rounded-lg px-12 py-6 backdrop-blur-lg">
      <section className="flex flex-col items-center">
        <span className="border-1 border-twc_border text-twc_primary mb-1 flex size-10 items-center justify-center rounded-full">
          <Building2Icon />
        </span>
        <p className="text-twc_primary text-xl font-bold">What Do We Do?</p>
      </section>
      <div className="mt-8 flex justify-center">
        <Image src={chartImage} alt="crypto-chart" className="" />
      </div>
      <div className="">
        <p className="text-twc_secondary">
          At CryptoHub, we facilitate the seamless trading of digital assets,
          providing a user-friendly platform for individuals and institutions to
          buy, sell, and manage their cryptocurrency portfolios with ease. Our
          exchange offers a secure and transparent environment, leveraging
          advanced technology to ensure the integrity of transactions and the
          safety of our users’ funds. With a focus on liquidity, reliability,
          and innovation, we aim to become a trusted gateway to the world of
          cryptocurrencies, empowering our customers to participate in the
          global digital economy with confidence.
        </p>
      </div>
    </div>
  )
}

export default WhatDoWeDo
