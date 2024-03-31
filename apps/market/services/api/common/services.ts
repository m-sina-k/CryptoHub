import { http } from "~/services/core/http"
import {
  type CoinsParams,
  type GetAllCoinsResponse,
  type StatParams,
} from "~/types"

import { commonRoutes } from "./routes"

export const getGlobalStats = (
  params?: Partial<StatParams>,
): Promise<GetAllCoinsResponse> => {
  return http.get(commonRoutes.stats, { params })
}

export const getAllCoins = (
  params?: Partial<CoinsParams>,
): Promise<GetAllCoinsResponse> => {
  return http.get(commonRoutes.allCoins, { params })
}
