import Features from "~/app/_components/Features"
import GetStarted from "~/app/_components/GetStarted"
import HowToBegin from "~/app/_components/HowToBegin"
import Header from "~/app/_components/layout/header/Header"

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <GetStarted />
        <Features />
        <HowToBegin />
      </div>
    </main>
  )
}
