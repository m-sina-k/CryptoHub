import { Filters } from "~/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type ThemeName = "light" | "dark" | "system"
type ThemeValue = "light" | "dark"

export type Theme = {
  name: ThemeName
  value: ThemeValue
}

type State = {
  theme: Theme
  filters: Partial<Filters>
}

type Action = {
  setTheme: (theme: State["theme"]) => void
  setFilters: (filters: Partial<Filters>) => void
}

export const useStore = create<State & Action>()(
  persist(
    (set) => ({
      filters: {},
      theme: { name: "dark", value: "dark" },
      setTheme: (selectedTheme: Theme) =>
        set((state) => ({ ...state, theme: selectedTheme })),
      setFilters: (filters: Partial<Filters>) =>
        set((state) => ({ ...state, filters })),
    }),
    {
      name: "X___________persist:CryptoHub_state___________X",
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
)
