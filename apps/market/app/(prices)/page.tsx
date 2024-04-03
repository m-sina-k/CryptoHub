import PopularTokens from "~/app/(prices)/_components/PopularTokens"
import PriceTable from "~/app/(prices)/_components/price-table/PriceTable"
import TopMovers from "~/app/(prices)/_components/top-movers/TopMovers"

export default function Page() {
  return (
    <main className="container mt-14">
      <PopularTokens />
      <TopMovers />
      <PriceTable />
    </main>
  )
}
