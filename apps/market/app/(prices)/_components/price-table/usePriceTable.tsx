import { useGetCoins } from "~/services/api/common/hooks"
import { useStore } from "~/store"

const usePriceTable = () => {
  const { filters } = useStore((state) => state)
  const { data, isLoading } = useGetCoins({ limit: 50, ...filters })

  return {
    isLoading,
    tableData: data?.data.data.coins,
  }
}

export default usePriceTable
