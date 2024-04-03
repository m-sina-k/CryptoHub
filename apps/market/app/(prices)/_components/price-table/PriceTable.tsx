"use client"

import usePriceTableColumns from "~/app/(prices)/_components/price-table/usePriceTableColumns"
import CustomTable from "~/components/common/CustomTable"

import usePriceTable from "./usePriceTable"

function PriceTable() {
  const { tableData } = usePriceTable()
  const { columns } = usePriceTableColumns()

  return (
    <div className="mt-14">
      <h2 className="text-heading capitalize">Today's cryptocurrency prices</h2>
      <div className="mt-5">
        <CustomTable data={tableData} columns={columns} />
      </div>
    </div>
  )
}

export default PriceTable
