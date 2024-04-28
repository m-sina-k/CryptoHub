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
  data: {
    totalCoins: number
    totalMarkets: number
    totalExchanges: number
    totalMarketCap: string
    total24hVolume: string
    btcDominance: string
  }
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
  data: { data: { stats: Stats; coins: Coin[] } }
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

export interface CoinDetails {
  uuid: string
  symbol: string
  name: string
  description: string
  color: string
  iconUrl: string
  websiteUrl: string
  links: {
    name: string
    url: string
    type: string
  }[]
  supply: {
    confirmed: boolean
    supplyAt: number
    circulating: string
    total: string
    max: string
  }
  "24hVolume": string
  marketCap: string
  fullyDilutedMarketCap: string
  price: string
  btcPrice: string
  priceAt: number
  change: string
  rank: number
  numberOfMarkets: number
  numberOfExchanges: number
  sparkline: string[]
  allTimeHigh: {
    price: string
    timestamp: number
  }
  coinrankingUrl: string
  lowVolume: boolean
  listedAt: number
  notices: {
    type: string
    value: string
  }[]
  contractAddresses: string[]
  tags: string[]
}
