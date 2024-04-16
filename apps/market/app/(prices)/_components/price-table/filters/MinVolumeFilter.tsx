import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Input,
} from "@ui/components"
import { FilterProps } from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"

function MinVolumeFilter({ filters, setFilters }: FilterProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="min-volume">
        <AccordionTrigger>Min Volume</AccordionTrigger>
        <AccordionContent>
          <Input
            type="number"
            min={0}
            value={filters?.minVolume}
            onChange={(e) => setFilters("minVolume", e.target.value)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default MinVolumeFilter
