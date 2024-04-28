import { useQuery, UseQueryResult } from "@tanstack/react-query"
import {
  getCoinDetails,
  getCoins,
  getGlobalStats,
  searchCoin,
} from "~/services/api/common/services"
import {
  CoinDetails,
  SearchResponse,
  TimePeriod,
  type CoinsParams,
  type GetCoinsResponse,
  type GlobalStatsResponse,
  type StatParams,
} from "~/types"

export const useGetGlobalStats = (
  params?: Partial<StatParams>,
): UseQueryResult<GlobalStatsResponse, Error> => {
  return useQuery({
    queryKey: ["global-stats", params],
    queryFn: () => getGlobalStats(params),
  })
}

export const useGetCoins = (
  params?: Partial<CoinsParams>,
): UseQueryResult<GetCoinsResponse, Error> => {
  return useQuery({
    queryKey: ["all-coins", params],
    queryFn: () => getCoins(params),
  })
}

export const useSearchCoin = (params: {
  query: string
}): UseQueryResult<SearchResponse, Error> => {
  return useQuery({
    queryKey: ["search-result", params],
    queryFn: () => searchCoin(params),
  })
}

export const useGetCoinDetails = (
  coinId: string,
  params: {
    referenceCurrencyUuid?: string
    timePeriod?: TimePeriod
  },
): UseQueryResult<{ data: { data: { coin: CoinDetails } } }, Error> => {
  return useQuery({
    queryKey: ["coin-details", coinId, params],
    queryFn: () => getCoinDetails(coinId, params),
  })
}
