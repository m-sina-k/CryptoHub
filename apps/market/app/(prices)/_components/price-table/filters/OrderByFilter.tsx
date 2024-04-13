import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@ui/components"

function OrderByFilter() {
  const orderByOptions = [
    "price",
    "marketCap",
    "24hVolume",
    "change",
    "listedAt",
  ]

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Order by</AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-2">
          {orderByOptions.map((option) => (
            <Badge
              className="flex cursor-pointer justify-center bg-[#293244] py-1"
              key={option}
            >
              {option}
            </Badge>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default OrderByFilter
