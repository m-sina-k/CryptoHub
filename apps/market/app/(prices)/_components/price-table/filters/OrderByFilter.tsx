import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@ui/components"
import { FilterProps } from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"
import { Order } from "~/types"

function OrderByFilter({ filters, setFilters }: FilterProps) {
  const orderByOptions: Order[] = [
    "price",
    "marketCap",
    "24hVolume",
    "change",
    "listedAt",
  ]

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="order-by">
        <AccordionTrigger>Order by</AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-2">
          {orderByOptions.map((order) => (
            <Badge
              key={order}
              isActive={filters?.orderBy === order}
              onClick={() => setFilters("orderBy", order)}
              className="flex cursor-pointer justify-center py-1"
            >
              {order}
            </Badge>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default OrderByFilter
