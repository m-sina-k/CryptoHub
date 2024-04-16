import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Input,
} from "@ui/components"
import { FilterProps } from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"

function LimitFilter({ filters, setFilters }: FilterProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="limit" className="border-b-0">
        <AccordionTrigger>Limit</AccordionTrigger>
        <AccordionContent>
          <Input
            type="number"
            min={0}
            max={1000}
            value={filters?.limit}
            onChange={(e) => setFilters("limit", e.target.value)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default LimitFilter
