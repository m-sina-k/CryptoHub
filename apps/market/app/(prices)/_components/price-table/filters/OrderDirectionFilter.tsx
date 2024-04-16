import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@ui/components"
import { FilterProps } from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"

const orderDirections: ("asc" | "desc")[] = ["asc", "desc"]

function OrderDirectionFilter({ filters, setFilters }: FilterProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="order-direction">
        <AccordionTrigger>Order Direction</AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-2">
          {orderDirections.map((orderDirection) => (
            <Badge
              key={orderDirection}
              isActive={filters?.orderDirection === orderDirection}
              onClick={() => setFilters("orderDirection", orderDirection)}
              className="flex cursor-pointer justify-center py-1 capitalize"
            >
              {orderDirection}
            </Badge>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default OrderDirectionFilter
