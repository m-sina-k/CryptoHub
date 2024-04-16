"use client"

import PriceTableFilters from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"
import usePriceTableColumns from "~/app/(prices)/_components/price-table/usePriceTableColumns"
import CustomTable from "~/components/common/CustomTable"

import usePriceTable from "./usePriceTable"

function PriceTable() {
  const { tableData, isLoading } = usePriceTable()
  const { columns } = usePriceTableColumns()

  return (
    <div className="mt-14">
      <section className="flex items-center justify-between">
        <h2 className="text-heading capitalize">
          Today's cryptocurrency prices
        </h2>
        <PriceTableFilters />
      </section>
      <div className="mt-5">
        {!isLoading && (
          <CustomTable
            enableSorting
            pageSize={10}
            columns={columns}
            data={tableData as unknown[]}
          />
        )}
      </div>
    </div>
  )
}

export default PriceTable
