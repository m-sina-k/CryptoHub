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
}

type Action = {
  setTheme: (theme: State["theme"]) => void
}

export const useStore = create<State & Action>()(
  persist(
    (set) => ({
      theme: { name: "dark", value: "dark" },
      setTheme: (selectedTheme: Theme) =>
        set((state) => ({ ...state, theme: selectedTheme })),
    }),
    {
      name: "X___________persist:CryptoHub_state___________X",
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
)
