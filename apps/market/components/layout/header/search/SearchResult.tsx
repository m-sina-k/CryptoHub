"use client"

import Image from "next/image"
import { type SearchResult as SearchResultType } from "~/types"

interface SearchResultProps {
  result: SearchResultType[] | undefined
}

function SearchResult({ result }: SearchResultProps) {
  return (
    <div className="bg-twc_background max-w-full overflow-auto py-2 shadow-sm">
      {result
        ? result.map((coin) => (
            <div
              key={coin.uuid}
              className="hover:bg-twc_table_row__background_hover flex cursor-pointer items-center gap-2 px-4 py-2"
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
