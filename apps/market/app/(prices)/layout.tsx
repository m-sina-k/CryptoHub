import Header from "~/components/layout/header/Header";

export default function PricesLayout({
                                       children,
                                     }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  )
}
