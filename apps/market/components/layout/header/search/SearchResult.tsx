"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@ui/lib/utils"
import { type SearchResult as SearchResultType } from "~/types"

interface SearchResultProps {
  result: SearchResultType[] | undefined
}

function SearchResult({ result }: SearchResultProps) {
  console.log(result)
  // const [selectedResultIndex, setSelectedResultIndex] = useState(0)
  //
  // const handleSelectResult = (e: KeyboardEvent) => {
  //   if (e.code === "ArrowUp" && selectedResultIndex !== 0) {
  //     setSelectedResultIndex((prev) => prev - 1)
  //     console.log('go up')
  //   }
  //   if (e.code === "ArrowDown" && selectedResultIndex !== results.length - 1) {
  //     setSelectedResultIndex((prev) => prev + 1)
  //     console.log('go down')
  //   }
  // }

  return (
    <div
      className="bg-twc_background py-2 shadow-sm"
      // onKeyDown={(e) => handleSelectResult(e)}
    >
      {result
        ? result.map((coin) => (
            <div
              key={coin.uuid}
              className={cn(
                "hover:bg-twc_table_row__background_hover flex cursor-pointer items-center gap-2 px-4 py-2",
                false && "bg-twc_table_row__background",
              )}
            >
              <Image
                width={20}
                height={20}
                alt={coin.symbol}
                src={coin.iconUrl}
              />
              <p>{coin.name}</p>
              <p className="text-twc_muted text-sm">{coin.symbol}</p>
            </div>
          ))
        : null}
    </div>
  )
}

export default SearchResult
