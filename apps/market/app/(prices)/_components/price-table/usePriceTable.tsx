import { useState } from "react"
import { useGetCoins } from "~/services/api/common/hooks"
import { useStore } from "~/store"
import { coins } from "~/utils/mock"

const usePriceTable = ({ pageSize }: { pageSize: number }) => {
  const [page, setPage] = useState(0)
  const { filters } = useStore((state) => state)

  // const {data, isLoading, isError} = useGetCoins({
  //   ...filters,
  //   limit: pageSize,
  //   offset: page * pageSize,
  // })

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
    // totalPages:  1000 / pageSize,
    // tableData: data?.data.data.coins,
  }
}

export default usePriceTable
