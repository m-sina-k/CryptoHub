import { useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableRow } from "@ui/index"
import { cn } from "@ui/lib/utils"
import Loading from "~/components/common/Loading"
import CustomTableHeader from "~/components/common/table/TableHeader"
import TablePagination from "~/components/common/table/TablePagination"

interface CustomTableProps {
  data: unknown[]
  columns: any
  isLoading?: boolean
  isError?: boolean
  enableSorting?: boolean
  page: number
  totalPages: number
  handlePageChange: (page: number) => void
  handleClickRow?: (data: any) => void
}

function CustomTable({
  data,
  isError,
  columns,
  isLoading,
  page,
  handlePageChange,
  handleClickRow,
  totalPages,
  enableSorting = false,
}: CustomTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      ...(enableSorting && { sorting }),
    },
    ...(enableSorting && { onSortingChange: setSorting }),
    ...(enableSorting && { getSortedRowModel: getSortedRowModel() }),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      {isLoading ? (
        <div className="h-[150px]">
          <Loading />
        </div>
      ) : isError ? (
        <div className="flex h-[100px] w-full items-center justify-center">
          <p className="text-red">Error while loading table.</p>
        </div>
      ) : (
        <>
          <Table>
            <CustomTableHeader table={table} enableSorting={enableSorting} />
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={
                    handleClickRow
                      ? () => handleClickRow(table.getRow(row.id).original)
                      : undefined
                  }
                  className={cn(
                    "border-y-1 border-y-twc_border bg-twc_table_row__background hover:bg-twc_table_row__background_hover",
                    handleClickRow && "cursor-pointer",
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            pageIndex={page}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  )
}

export default CustomTable
