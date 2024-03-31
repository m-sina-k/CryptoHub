import { formatLargeNumber } from "~/utils/helpers"
import { globalStats } from "~/utils/mock"

const stats = [
  {
    key: "total-coins",
    stat: "coins:",
    value: globalStats.totalCoins.toLocaleString(),
  },
  {
    key: "total-markets",
    stat: "markets:",
    value: globalStats.totalMarkets.toLocaleString(),
  },
  {
    key: "market-cap",
    stat: "market cap:",
    value: formatLargeNumber(globalStats.totalMarketCap) + " USD",
  },
  {
    key: "exchanges",
    stat: "exchanges:",
    value: globalStats.totalExchanges,
  },
  {
    key: "volume",
    stat: "24H volume:",
    value: formatLargeNumber(globalStats.total24hVolume) + " USD",
  },
  {
    key: "btc-dominance",
    stat: "BTC dominance:",
    value: globalStats.btcDominance.toFixed(2) + "%",
  },
]

function Stats() {
  return (
    <div className="bg-twc_foreground border-b-1 border-b-twc_border">
      <div className="container flex items-center gap-4 py-4">
        {stats.map((entry) => (
          <p
            key={entry.key}
            className="text-twc_muted flex gap-2 text-xs capitalize"
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
