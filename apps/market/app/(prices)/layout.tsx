import Footer from "~/components/layout/Footer"
import Header from "~/components/layout/header/Header"
import Stats from "~/components/layout/stats/Stats"

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <Header />
      <Stats />
      <div>{children}</div>
      <Footer />
    </>
  )
}
