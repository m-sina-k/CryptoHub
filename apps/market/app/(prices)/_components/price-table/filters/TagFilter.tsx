import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@ui/components"

function TagFilter() {
  const tags = ["Defi", "DEX", "Gaming", "Meme"]

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-2">
          {tags.map((tag) => (
            <Badge
              className="flex cursor-pointer justify-center bg-[#293244] py-1"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default TagFilter
