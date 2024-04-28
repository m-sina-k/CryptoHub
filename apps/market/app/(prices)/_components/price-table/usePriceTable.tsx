import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"
import { useGetCoins } from "~/services/api/common/hooks"
import { getCoins } from "~/services/api/common/services"
import { useStore } from "~/store"
import { Coin } from "~/types"

const usePriceTable = ({ pageSize }: { pageSize: number }) => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const { filters } = useStore((state) => state)
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useGetCoins({
    ...filters,
    limit: pageSize,
    offset: page * pageSize,
  })

  useEffect(() => {
    const prefetchNextPage = async () => {
      const nextPage = page + 1
      await queryClient.prefetchQuery({
        queryKey: ["all-coins", filters, pageSize, nextPage],
        queryFn: () =>
          getCoins({
            ...filters,
            limit: pageSize,
            offset: nextPage * pageSize,
          }),
      })
    }
    prefetchNextPage()
  }, [page, queryClient])

  useEffect(() => {
    setPage(0)
  }, [filters])

  const handleClickRow = (coinDetails: Coin) => {
    router.push(`/coin/${coinDetails.uuid}`)
  }

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber)
  }

  return {
    page,
    isError,
    isLoading,
    handlePageChange,
    handleClickRow,
    totalPages: 1000 / pageSize,
    tableData: data?.data.data.coins,
  }
}

export default usePriceTable
