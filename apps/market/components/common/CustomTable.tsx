import { useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
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
}

function CustomTable({
  data,
  columns,
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
  })

  return (
    <Table>
      <TableHeader>
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
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable
