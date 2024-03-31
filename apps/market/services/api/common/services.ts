import { http } from "~/services/core/http"
import {
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
