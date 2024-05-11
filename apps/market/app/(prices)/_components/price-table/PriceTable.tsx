"use client"

import { Badge } from "@ui/components"
import PriceTableFilters from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"
import usePriceTableColumns from "~/app/(prices)/_components/price-table/usePriceTableColumns"
import Loading from "~/components/common/Loading"
import CustomTable from "~/components/common/table/CustomTable"
import { useStore } from "~/store"
import { Filters } from "~/types"
import { formatLargeNumber } from "~/utils/helpers"

import usePriceTable from "./usePriceTable"

function PriceTable() {
  const { columns } = usePriceTableColumns()
  const {
    tableData,
    isLoading,
    isError,
    page,
    totalPages,
    handleClickRow,
    handlePageChange,
  } = usePriceTable({ pageSize: 10 })
  const { filters, setFilters } = useStore((state) => state)

  const deselectFilter = (key: keyof Filters) => {
    const updatedFilters = { ...filters }
    delete updatedFilters[key]
    setFilters(updatedFilters)
  }

  return (
    <div className="mt-14 px-5">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="flex items-center justify-between">
            <h2 className="text-heading capitalize">
              Today's cryptocurrency prices
            </h2>
            <PriceTableFilters />
          </section>
          {Object.keys(filters).length !== 0 && (
            <div className="my-2 flex cursor-pointer gap-2">
              <h6>Result for:</h6>
              {Object.entries(filters).map(([key, value]) => (
                <Badge
                  variant="destructive"
                  onClick={() => deselectFilter(key as keyof Filters)}
                >
                  <p className="mr-1 capitalize">
                    {key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}:
                  </p>
                  <p className="capitalize">
                    {key === "minVolume"
                      ? formatLargeNumber(String(value))
                      : value
                          .toString()
                          .replace(/([a-z])([A-Z])/g, "$1 $2")
                          .toLowerCase()}
                  </p>
                </Badge>
              ))}
            </div>
          )}
          <div className="mt-5">
            <CustomTable
              enableSorting
              columns={columns}
              isError={isError}
              isLoading={isLoading}
              page={page}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              handleClickRow={handleClickRow}
              data={tableData as unknown[]}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default PriceTable
