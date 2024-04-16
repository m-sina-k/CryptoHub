import { Filters } from "~/types"
import { create } from "zustand"

type Theme = "light" | "dark"

type State = {
  theme: Theme
  filters: Partial<Filters>
}

type Action = {
  setTheme: (theme: State["theme"]) => void
  setFilters: (filters: Partial<Filters>) => void
}

export const useStore = create<State & Action>((set) => ({
  theme: "dark",
  filters: {},
  setTheme: (selectedTheme: "light" | "dark") =>
    set((state) => ({ ...state, theme: selectedTheme })),
  setFilters: (filters: Partial<Filters>) =>
    set((state) => ({ ...state, filters })),
}))
