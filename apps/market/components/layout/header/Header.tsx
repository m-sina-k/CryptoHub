import dynamic from "next/dynamic"
import SearchInput from "~/components/layout/header/search/SearchInput"

const ThemeSwitcher = dynamic(async () => await import("./ThemeSwitcher"), {
  ssr: false,
})

function Header() {
  return (
    <header className="bg-twc_foreground border-b-1 border-b-twc_border">
      <div className="container flex items-center justify-between gap-5 py-3">
        <section>
          <p className="text-twc_primary text-xl font-bold text-black">
            CryptoHub
          </p>
        </section>
        <section className="flex items-center gap-2">
          <SearchInput />
          <ThemeSwitcher />
        </section>
      </div>
    </header>
  )
}

export default Header
