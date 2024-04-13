import React from "react"
import { Button } from "@ui/components"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/ui/dialog"
import OrderByFilter from "~/app/(prices)/_components/price-table/filters/OrderByFilter"
import TagFilter from "~/app/(prices)/_components/price-table/filters/TagFilter"
import { FilterIcon } from "lucide-react"

function PriceTableFilters() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="cta">
          <FilterIcon className="mr-1 size-4" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
          <DialogDescription>
            <TagFilter />
            <OrderByFilter />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default PriceTableFilters
