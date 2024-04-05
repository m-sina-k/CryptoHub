import { useEffect, useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/components"
import { cn } from "@ui/lib/utils"
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react"

interface CustomTableProps {
  data: any
  columns: any
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

  useEffect(() => {
    console.log(pagination.pageIndex)
  }, [pagination.pageIndex])

  return (
    <>
      <Table>
        <TableHeader className="bg-twc_accent">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    "uppercase",
                    enableSorting &&
                      header.column.getCanSort() &&
                      "cursor-pointer",
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex">
                    <span className="flex-1">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </span>
                    <span>
                      {enableSorting &&
                        header.column.getCanSort() &&
                        !header.column.getIsSorted() && (
                          <ChevronsUpDownIcon className="ml-0.5" size={18} />
                        )}
                    </span>
                    <span>
                      {{
                        asc: <ChevronUpIcon className="ml-0.5" size={18} />,
                        desc: <ChevronDownIcon className="ml-0.5" size={18} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
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
      {/*<Pagination className="my-5 flex justify-end">*/}
      {/*  <PaginationContent>*/}
      {/*    <PaginationItem>*/}
      {/*      <PaginationPrevious*/}
      {/*        onClick={() => table.previousPage()}*/}
      {/*        disabled={!table.getCanPreviousPage()}*/}
      {/*      />*/}
      {/*    </PaginationItem>*/}

      {/*    <PaginationItem>*/}
      {/*      <PaginationButton*/}
      {/*        onClick={() => table.firstPage()}*/}
      {/*        isActive={pagination.pageIndex == 0}*/}
      {/*      >*/}
      {/*        1*/}
      {/*      </PaginationButton>*/}
      {/*    </PaginationItem>*/}

      {/*    {*/}
      {/*      pagination.pageIndex + 2 < table.getPageCount() && (*/}
      {/*        <PaginationItem>*/}
      {/*          <PaginationButton*/}
      {/*            onClick={() => table.setPageIndex(pagination.pageIndex + 1)}*/}
      {/*            // isActive={pagination.pageIndex == 0}*/}
      {/*          >*/}
      {/*            {pagination.pageIndex + 2}*/}
      {/*          </PaginationButton>*/}
      {/*        </PaginationItem>*/}
      {/*      )*/}
      {/*    }*/}

      {/*    /!*{Array.from({ length: pagination.pageIndex + 3 }, (_, i) => (*!/*/}
      {/*    /!*  <PaginationItem>*!/*/}
      {/*    /!*    <PaginationButton*!/*/}
      {/*    /!*      onClick={() => table.setPageIndex(i + 1)}*!/*/}
      {/*    /!*      isActive={pagination.pageIndex == i + 1}*!/*/}
      {/*    /!*    >*!/*/}
      {/*    /!*      {i + 2}*!/*/}
      {/*    /!*    </PaginationButton>*!/*/}
      {/*    /!*  </PaginationItem>*!/*/}
      {/*    /!*))}*!/*/}

      {/*    {table.getPageCount() > 3 && (*/}
      {/*      <PaginationItem>*/}
      {/*        <PaginationEllipsis />*/}
      {/*      </PaginationItem>*/}
      {/*    )}*/}

      {/*    <PaginationItem>*/}
      {/*      <PaginationButton*/}
      {/*        onClick={() => table.lastPage()}*/}
      {/*        isActive={pagination.pageIndex == table.getPageCount() - 1}*/}
      {/*      >*/}
      {/*        {table.getPageCount()}*/}
      {/*      </PaginationButton>*/}
      {/*    </PaginationItem>*/}

      {/*    <PaginationItem>*/}
      {/*      <PaginationNext*/}
      {/*        onClick={() => table.nextPage()}*/}
      {/*        disabled={!table.getCanNextPage()}*/}
      {/*      />*/}
      {/*    </PaginationItem>*/}
      {/*  </PaginationContent>*/}
      {/*</Pagination>*/}
    </>
  )
}

export default CustomTable
