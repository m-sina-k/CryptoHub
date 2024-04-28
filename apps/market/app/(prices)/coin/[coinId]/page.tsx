"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@ui/components"
import { cn } from "@ui/lib/utils"
import CoinStats from "~/app/(prices)/coin/[coinId]/_components/CoinStats"
import SparkLineChart from "~/app/(prices)/coin/[coinId]/_components/SparkLineChart"
import { useGetCoinDetails } from "~/services/api/common/hooks"
import { formatCoinPrice } from "~/utils/helpers"
import { coin } from "~/utils/mock"
import { ChevronRightIcon } from "lucide-react"

function Page() {
  const { coinId } = useParams()
  const { data, isLoading, isError } = useGetCoinDetails(coinId as string, {})

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>

  const coin = data?.data.data.coin!
  const isChangeNegative = coin.change.startsWith("-")

  return (
    <div className="container my-14">
      <section className="mb-5 flex items-center">
        <Button className="p-0" variant="link" size="sm">
          <Link href="/">All coins</Link>
        </Button>
        <p className="mx-2 text-sm">
          <ChevronRightIcon size={14} />
        </p>
        <p className="text-twc_secondary text-sm">{coin.name}</p>
      </section>
      <section className="mb-7 flex items-center gap-2">
        <Image src={coin.iconUrl} alt={coin.symbol} width={28} height={28} />
        <p className="text-2xl">{coin.name}</p>
        <p className="text-twc_muted text-lg">{coin.symbol}</p>
      </section>

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
    </div>
  )
}

export default Page
