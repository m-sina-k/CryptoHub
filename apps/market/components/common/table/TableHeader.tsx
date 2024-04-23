import React from "react"
import { flexRender, Table } from "@tanstack/react-table"
import { TableHead, TableHeader, TableRow } from "@ui/components"
import { cn } from "@ui/lib/utils"
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react"

interface TableHeaderProps {
  table: Table<unknown>
  enableSorting: boolean
}

function CustomTableHeader({ table, enableSorting }: TableHeaderProps) {
  return (
    <TableHeader className="bg-twc_accent">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              className={cn(
                "whitespace-nowrap uppercase",
                enableSorting && header.column.getCanSort() && "cursor-pointer",
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
  )
}

export default CustomTableHeader
