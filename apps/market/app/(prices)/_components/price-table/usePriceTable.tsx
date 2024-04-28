import { useState } from "react"
import { useRouter } from "next/navigation"
import { useGetCoins } from "~/services/api/common/hooks"
import { useStore } from "~/store"
import { Coin } from "~/types"
import { coins } from "~/utils/mock"

const usePriceTable = ({ pageSize }: { pageSize: number }) => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const { filters } = useStore((state) => state)

  // const {data, isLoading, isError} = useGetCoins({
  //   ...filters,
  //   limit: pageSize,
  //   offset: page * pageSize,
  // })

  const handleClickRow = (coinDetails: Coin) => {
    router.push(`/coin/${coinDetails.uuid}`)
  }

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber)
  }

  return {
    page,
    isError: false,
    isLoading: false,
    handlePageChange,
    totalPages: 10,
    tableData: coins,
    handleClickRow,
    // totalPages:  1000 / pageSize,
    // tableData: data?.data.data.coins,
  }
}

export default usePriceTable
