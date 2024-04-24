import Image from "next/image"
import { cn } from "@ui/lib/utils"
import CoinStats from "~/app/(prices)/coin/[coinId]/_components/CoinStats"
import SparkLineChart from "~/app/(prices)/coin/[coinId]/_components/SparkLineChart"
import { formatCoinPrice } from "~/utils/helpers"
import { coin } from "~/utils/mock"

function Page() {
  const isChangeNegative = coin.change.startsWith("-")

  return (
    <div className="container my-14">
      <section className="mb-7 flex items-center gap-2">
        <Image src={coin.iconUrl} alt={coin.symbol} width={28} height={28} />
        <p className="text-2xl">{coin.name}</p>
        <p className="text-twc_muted text-lg">{coin.symbol}</p>
      </section>

      <div className="grid grid-cols-[9fr,3fr] gap-5">
        <div className="bg-twc_accent rounded-sm p-5">
          <section className="flex items-center gap-3">
            <p className="text-twc_primary text-2xl">
              {formatCoinPrice(coin.price)}
            </p>
            <p className={cn("text-green", isChangeNegative && "text-red")}>
              {!isChangeNegative && "+"}
              {coin.change}%
            </p>
            <p>(24H)</p>
          </section>
          <p className="text-twc_muted mt-3">
            {Number(coin.btcPrice).toFixed(2)} BTC
          </p>
          <section className="h-[400px]">
            <SparkLineChart coin={coin} />
          </section>
          <section>
            <CoinStats coin={coin} />
          </section>
        </div>
        <section className="">section 2</section>
      </div>
    </div>
  )
}

export default Page
