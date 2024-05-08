import Features from "~/app/_components/Features"
import GetStarted from "~/app/_components/GetStarted"
import HowToBegin from "~/app/_components/HowToBegin"
import Footer from "~/app/_components/layout/Footer"
import Header from "~/app/_components/layout/header/Header"
import WhatDoWeDo from "~/app/_components/WhatDoWeDo"
import Stats from "~/app/Stats"

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <GetStarted />
        <Features />
        <HowToBegin />
        <Stats />
        <WhatDoWeDo />
        <Footer />
      </div>
    </main>
  )
}
