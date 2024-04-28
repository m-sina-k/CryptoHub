export const commonRoutes = {
  stats: "/stats",
  coins: "/coins",
  coinDetails: (coinId: string) => `/coin/${coinId}`,
  search: "/search-suggestions",
}
