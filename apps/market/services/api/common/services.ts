import { http } from "~/services/core/http"
import {
  CoinDetails,
  SearchResponse,
  TimePeriod,
  type CoinsParams,
  type GetCoinsResponse,
  type StatParams,
} from "~/types"

import { commonRoutes } from "./routes"

export const getGlobalStats = (
  params?: Partial<StatParams>,
): Promise<GetCoinsResponse> => {
  return http.get(commonRoutes.stats, { params })
}

export const getCoins = (
  params?: Partial<CoinsParams>,
): Promise<GetCoinsResponse> => {
  return http.get(commonRoutes.coins, { params })
}

export const searchCoin = (params: {
  query: string
}): Promise<SearchResponse> => {
  return http.get(commonRoutes.search, { params })
}

export const getCoinDetails = (
  coinId: string,
  params: {
    referenceCurrencyUuid?: string
    timePeriod?: TimePeriod
  },
): Promise<{ data: { data: { coin: CoinDetails } } }> => {
  return http.get(commonRoutes.coinDetails(coinId), { params })
}
