import GetStarted from "~/app/_components/GetStarted"
import Header from "~/app/_components/layout/header/Header"

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <GetStarted />
      </div>
    </main>
  )
}
