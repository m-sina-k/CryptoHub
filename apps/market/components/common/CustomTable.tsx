import { useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableRow } from "@ui/components"
import CustomTableHeader from "~/components/common/table/TableHeader"
import TablePagination from "~/components/common/table/TablePagination"
import { LoaderIcon } from "lucide-react"

interface CustomTableProps {
  data: unknown[]
  columns: any
  isLoading?: boolean
  isError?: boolean
  enableSorting?: boolean
  page: number
  totalPages: number
  handlePageChange: (page: number) => void
}

function CustomTable({
  data,
  isError,
  columns,
  isLoading,
  page,
  handlePageChange,
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
        <div className="flex h-[100px] w-full items-center justify-center">
          <LoaderIcon className="animate-spin" />
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
                  className="border-y-1 border-y-twc_border bg-twc_table_row__background hover:bg-twc_table_row__background_hover"
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
