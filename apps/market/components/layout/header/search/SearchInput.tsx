"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react"
import { Input } from "@ui/components"
import SearchResult from "~/components/layout/header/search/SearchResult"
import { useSearchCoin } from "~/services/api/common/hooks"
import { useOutsideClick } from "~/utils/hooks/useClickOutside"
import { useDebounce } from "~/utils/hooks/useDebounce"
import { SearchIcon } from "lucide-react"

function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const { data: result } = useSearchCoin({ query: searchQuery })

  const ref = useOutsideClick(() => {
    setShowResults(false)
  })

  const handleSearch = useDebounce((term: string) => {
    setSearchQuery(term)
  }, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInputValue(value)

    handleSearch(value)
  }

  const triggerSearchInput = (e: KeyboardEvent) => {
    if (e.code === "Slash") {
      searchInputRef?.current?.focus()
    }
    if (e.code === "Escape") {
      searchInputRef?.current?.blur()
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", (event) => triggerSearchInput(event))
    return () =>
      window.removeEventListener("keyup", (event) => triggerSearchInput(event))
  }, [])

  const handleCloseMenu = () => {
    setShowResults(false)
  }

  return (
    <div className="relative" ref={ref}>
      <Input
        className="h-8"
        ref={searchInputRef}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search coins..."
        onFocus={() => setShowResults(true)}
        startAdornment={<SearchIcon className="h-[16px] w-[16px]" />}
        endAdornment={
          <span
            className="flex h-5 w-6 items-center justify-center rounded-sm bg-[#5d667b] text-xs text-white
            "
          >
            /
          </span>
        }
      />
      {showResults && (
        <div className="absolute left-0 right-0 top-8 z-50">
          <SearchResult
            result={result?.data.data.coins}
            handleCloseMenu={handleCloseMenu}
          />
        </div>
      )}
    </div>
  )
}

export default SearchInput
