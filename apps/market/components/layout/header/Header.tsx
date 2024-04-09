import { Button } from "@ui/components"
import SearchInput from "~/components/layout/header/search/SearchInput"
import { SunIcon } from "lucide-react"

function Header() {
  return (
    <header className="bg-twc_foreground border-b-1 border-b-twc_border">
      <div className="container flex items-center justify-between py-3">
        <section>
          <p className="text-twc_primary text-xl font-bold text-black">
            CryptoHub
          </p>
        </section>
        <section className="flex items-center gap-2">
          <SearchInput />
          <Button variant="ghost" className="flex h-8 w-8 p-1.5">
            <SunIcon />
          </Button>
        </section>
      </div>
    </header>
  )
}

export default Header
