import React from "react"
import { CoinDetails } from "~/types"
import { formatLargeNumber } from "~/utils/helpers"

interface CoinStatsProps {
  coin: CoinDetails
}

function CoinStats({ coin }: CoinStatsProps) {
  const coinStats = [
    {
      label: "Market Cap (USD)",
      value: "$" + formatLargeNumber(coin.marketCap),
    },
    {
      label: "24H VOLUME (USD)",
      value: "$" + formatLargeNumber(coin["24hVolume"]),
    },
    {
      label: "Circulating Supply",
      value: "$" + formatLargeNumber(coin.supply.circulating),
    },
    {
      label: "Max Supply",
      value: "$" + formatLargeNumber(coin.supply.max),
    },
    {
      label: "Total Supply",
      value: "$" + formatLargeNumber(coin.supply.total),
    },
  ]
  return (
    <div className="mt-8 flex flex-wrap justify-between">
      {coinStats.map((stat) => (
        <section>
          <p className="text-twc_muted text-sm">{stat.label}</p>
          <p className="text-twc_primary mt-2 text-lg">{stat.value}</p>
        </section>
      ))}
    </div>
  )
}

export default CoinStats
