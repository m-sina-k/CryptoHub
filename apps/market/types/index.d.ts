type TimePeriod =
  | "1h"
  | "3h"
  | "12h"
  | "24h"
  | "7d"
  | "30d"
  | "3m"
  | "1y"
  | "3y"
  | "5y"

type Tire = 1 | 2 | 3

type Tag =
  | "defi"
  | "stablecoin"
  | "nft"
  | "dex"
  | "exchange"
  | "staking"
  | "dao"
  | "meme"
  | "privacy"
  | "metaverse"
  | "gaming"
  | "wrapped"
  | "layer-1"
  | "layer-2"
  | "fan-token"
  | "football-club"
  | "web3"
  | "social"

type Order = "price" | "marketCap" | "24hVolume" | "change" | "listedAt"

export interface Stats {
  totalCoins: number
  totalMarkets: number
  totalExchanges: number
  totalMarketCap: string
  total24hVolume: string
}

export interface StatParams {
  referenceCurrencyUuid: string
}

export type GlobalStatsResponse = { data: Stats }

export interface Coin {
  uuid: string
  symbol: string
  name: string
  color: string
  iconUrl: string
  marketCap: string
  price: string
  listedAt: number
  tier: number
  change: string
  rank: number
  sparkline: (string | null)[]
  lowVolume: boolean
  coinrankingUrl: string
  "24hVolume": string
  btcPrice: string
  contractAddresses: string[]
}

export interface CoinsParams {
  referenceCurrencyUuid: string
  timePeriod: TimePeriod
  symbols: string[]
  contractAddresses: string[]
  blockchains: string[]
  uuids: string[]
  tiers: Tire
  tags: Tag[]
  orderBy: Order
  search: string
  scopeId: string
  scopeLimit: number
  orderDirection: "asc" | "desc"
  limit: number
  offset: number
  minVolume: number
}

export type GetCoinsResponse = {
  data: { stats: Stats; data: { coins: Coin[] } }
}

interface SearchResult {
  uuid: string
  iconUrl: string
  name: string
  symbol: string
  price: string
}

export interface SearchResponse {
  data: {
    data: {
      coins: SearchResult[]
    }
  }
}

export interface Filters {
  tag: Tag
  orderBy: Order
  orderDirection: "asc" | "desc"
  minVolume: number
  limit: number
}
