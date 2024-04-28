import dynamic from "next/dynamic"
import Logo from "~/components/common/Logo"
import SearchInput from "~/components/layout/header/search/SearchInput"

const ThemeSwitcher = dynamic(async () => await import("./ThemeSwitcher"), {
  ssr: false,
})

function Header() {
  return (
    <header className="bg-twc_foreground border-b-1 border-b-twc_border">
      <div className="container flex items-center justify-between gap-5 py-3">
        <section>
          <Logo />
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
