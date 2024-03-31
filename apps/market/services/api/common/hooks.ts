import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getCoins, getGlobalStats } from "~/services/api/common/services"
import {
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
