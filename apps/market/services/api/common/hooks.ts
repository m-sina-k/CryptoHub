import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getAllCoins, getGlobalStats } from "~/services/api/common/services"
import {
  type CoinsParams,
  type GetAllCoinsResponse,
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

export const useGetAllCoins = (
  params?: Partial<CoinsParams>,
): UseQueryResult<GetAllCoinsResponse, Error> => {
  return useQuery({
    queryKey: ["all-coins", params],
    queryFn: () => getAllCoins(params),
  })
}
