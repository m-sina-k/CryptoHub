"use client"

import { useGetGlobalStats } from "~/services/api/common/hooks"
import { formatLargeNumber } from "~/utils/helpers"

function Stats() {
  const { data: globalStats, isLoading, isError } = useGetGlobalStats()
  const stats = [
    {
      key: "total-coins",
      stat: "coins:",
      value: !isLoading
        ? globalStats?.data.data.totalCoins.toLocaleString()
        : "-",
    },
    {
      key: "total-markets",
      stat: "markets:",
      value: !isLoading
        ? globalStats?.data.data.totalMarkets.toLocaleString()
        : "-",
    },
    {
      key: "market-cap",
      stat: "market cap:",
      value: !isLoading
        ? formatLargeNumber(globalStats?.data.data.totalMarketCap!) + " USD"
        : "-",
    },
    {
      key: "exchanges",
      stat: "exchanges:",
      value: !isLoading ? globalStats?.data.data.totalExchanges : "-",
    },
    {
      key: "volume",
      stat: "24H volume:",
      value: !isLoading
        ? formatLargeNumber(globalStats?.data.data.total24hVolume!) + " USD"
        : "-",
    },
    {
      key: "btc-dominance",
      stat: "BTC dominance:",
      value: !isLoading
        ? Number(globalStats?.data.data.btcDominance).toFixed(2) + "%"
        : "-",
    },
  ]

  return (
    <div className="bg-twc_foreground border-b-1 border-b-twc_border max-w-full overflow-auto">
      <div className="container flex items-center gap-4 py-4">
        {isError && <p>Error while loading global stats.</p>}

        {stats.map((entry) => (
          <p
            key={entry.key}
            className="text-twc_muted flex gap-2 whitespace-nowrap text-xs capitalize"
          >
            {entry.stat}
            <span className="text-twc_primary">{entry.value}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Stats
