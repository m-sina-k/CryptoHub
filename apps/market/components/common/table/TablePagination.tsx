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
  pageIndex: number
  handlePageChange: (page: number) => void
  totalPages: number
}

function TablePagination({
  pageIndex,
  handlePageChange,
  totalPages,
}: TablePaginationProps) {
  return (
    <Pagination className="my-5 flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(--pageIndex)}
            disabled={pageIndex === 0}
          />
        </PaginationItem>

        {paginationBuilder(pageIndex, totalPages)?.items.map((item, index) =>
          item === false ? (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationButton
                isActive={pageIndex == Number(item) - 1}
                onClick={() => {
                  handlePageChange(Number(item) - 1)
                }}
              >
                {item}
              </PaginationButton>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(++pageIndex)}
            disabled={pageIndex === totalPages - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default TablePagination
