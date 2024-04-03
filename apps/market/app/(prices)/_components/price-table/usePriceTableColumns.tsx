import React from "react"
import Image from "next/image"
import { createColumnHelper } from "@tanstack/react-table"
import { cn } from "@ui/lib/utils"
import CustomTooltip from "~/components/common/CustomTooltip"
import LineChart from "~/components/common/LineChart"
import { Coin } from "~/types"
import { formatLargeNumber } from "~/utils/helpers"

function usePriceTableColumns() {
  const columnHelper = createColumnHelper<Coin>()

  const defaultHeaderStyles = "flex items-center justify-end gap-1"
  const defaultCellStyles = "flex justify-end"

  const columns = [
    columnHelper.accessor("rank", {
      header: () => (
        <span className={cn(defaultHeaderStyles, "justify-start")}>
          #
          <CustomTooltip
            text={"Rank is the position of a cryptocurrency by Market Cap."}
          />
        </span>
      ),
      cell: (cell) => cell.getValue(),
    }),
    columnHelper.accessor("name", {
      cell: (cell) => (
        <div className={cn(defaultHeaderStyles, "justify-start")}>
          <Image
            width={24}
            height={24}
            src={cell.row.original.iconUrl}
            alt={cell.row.original.symbol}
          />
          <section>
            <p>{cell.getValue()}</p>
            <p className="text-twc_muted">{cell.row.original.symbol}</p>
          </section>
        </div>
      ),
      header: "name",
    }),
    columnHelper.accessor("price", {
      header: () => (
        <span className={cn(defaultHeaderStyles)}>
          price
          <CustomTooltip
            text={
              "Price is the cost of a single coin or token for a cryptocurrency. it is influenced by supply & demand, availability & many other factors."
            }
          />
        </span>
      ),
      cell: (cell) => (
        <p className={cn(defaultCellStyles)}>
          ${parseInt(cell.getValue().split(".")[0] as string).toLocaleString()}.
          {parseInt(cell.getValue().split(".")[1] as string)
            .toString()
            .slice(0, 2)}
        </p>
      ),
    }),
    columnHelper.accessor("change", {
      header: () => (
        <span className={cn(defaultHeaderStyles)}>
          24h change
          <CustomTooltip
            text={
              "24H change show the percentage price difference in the market between now and 24 hours ago."
            }
          />
        </span>
      ),
      cell: (cell) => {
        const isChangeNegative = cell.getValue().startsWith("-")
        return (
          <p
            className={cn(
              defaultCellStyles,
              isChangeNegative ? "text-red" : "text-green",
            )}
          >
            {!isChangeNegative && "+"}
            {cell.getValue()}%
          </p>
        )
      },
    }),
    columnHelper.accessor("24hVolume", {
      header: () => (
        <span className={cn(defaultHeaderStyles)}>
          24h volume
          <CustomTooltip
            text={
              "24H volume show the numbers of tokens traded in the market between now and 24 hours ago."
            }
          />
        </span>
      ),
      cell: (cell) => (
        <p className={cn(defaultCellStyles)}>
          {"$" + formatLargeNumber(cell.getValue())}
        </p>
      ),
    }),
    columnHelper.accessor("marketCap", {
      header: () => (
        <span className={cn(defaultHeaderStyles)}>
          market cap
          <CustomTooltip
            text={
              "Market cap is a cryptocurrency's total value and its calculated by multiplying Price and Circulating Supply."
            }
          />
        </span>
      ),
      cell: (cell) => (
        <p className={cn(defaultCellStyles)}>
          {"$" + formatLargeNumber(cell.getValue())}
        </p>
      ),
    }),
    columnHelper.accessor("sparkline", {
      header: () => (
        <span className={cn(defaultHeaderStyles)}>
          7D Chart
          <CustomTooltip
            text={
              "7D Chart tracks price movement trends in the market over the past 7 days."
            }
          />
        </span>
      ),
      cell: (cell) => (
        <div className="flex justify-end">
          <div className="h-[30px] w-[110px]">
            <LineChart
              chartData={{
                id: cell.row.original.name,
                chartColor: cell.row.original.change.startsWith("-")
                  ? "red"
                  : "green",
                data: cell.row.original.sparkline,
              }}
            />
          </div>
        </div>
      ),
    }),
  ]

  return {
    columns,
  }
}

export default usePriceTableColumns
