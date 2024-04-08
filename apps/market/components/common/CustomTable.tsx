import { useState } from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableRow } from "@ui/components"
import CustomTableHeader from "~/components/common/table/TableHeader"
import TablePagination from "~/components/common/table/TablePagination"

interface CustomTableProps {
  data: unknown[]
  columns: ColumnDef<any, any>[]
  enableSorting?: boolean
  pageSize?: number
}

function CustomTable({
  data,
  columns,
  enableSorting = false,
  pageSize = 50,
}: CustomTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  })

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      ...(enableSorting && { sorting }),
    },
    ...(enableSorting && { onSortingChange: setSorting }),
    ...(enableSorting && { getSortedRowModel: getSortedRowModel() }),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  })

  return (
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination table={table} pageIndex={pagination.pageIndex} />
    </>
  )
}

export default CustomTable
