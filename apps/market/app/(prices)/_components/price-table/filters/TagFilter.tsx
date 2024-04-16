import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@ui/components"
import { FilterProps } from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"
import { Tag } from "~/types"

const tags: Tag[] = [
  "defi",
  "stablecoin",
  "nft",
  "dex",
  "exchange",
  "staking",
  "dao",
  "meme",
  "privacy",
  "metaverse",
  "gaming",
  "wrapped",
  "layer-1",
  "layer-2",
  "fan-token",
  "football-club",
  "web3",
  "social",
]

function TagFilter({ filters, setFilters }: FilterProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent className="grid max-h-44 grid-cols-2 gap-2 overflow-auto">
          {tags.map((tag) => (
            <Badge
              key={tag}
              isActive={filters?.tag === tag}
              onClick={() => setFilters("tag", tag)}
              className="flex cursor-pointer justify-center py-1 capitalize"
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
