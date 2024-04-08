import { Table } from "@tanstack/react-table"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@ui/components"
import { paginationBuilder } from "~/utils/helpers"

interface TablePaginationProps {
  table: Table<unknown>
  pageIndex: number
}

function TablePagination({ table, pageIndex }: TablePaginationProps) {
  return (
    <Pagination className="my-5 flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </PaginationItem>

        {paginationBuilder(pageIndex, table.getPageCount()).map(
          (item, index) =>
            item === false ? (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={index}>
                <PaginationButton
                  onClick={() => table.setPageIndex(Number(item) - 1)}
                  isActive={pageIndex == Number(item) - 1}
                >
                  {item}
                </PaginationButton>
              </PaginationItem>
            ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default TablePagination
