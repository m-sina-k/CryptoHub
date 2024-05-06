"use client"

import { useEffect, useState } from "react"

export const useBrowserTheme = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    window?.matchMedia("(prefers-color-scheme: dark)").matches,
  )

  useEffect(() => {
    function handleDarkModePrefferedChange() {
      const doesMatch = matchMedia("(prefers-color-scheme: dark)").matches
      setPrefersDarkMode(doesMatch)
    }

    matchMedia("(prefers-color-scheme: dark)").addEventListener(
      "change",
      handleDarkModePrefferedChange,
    )

    return () => {
      matchMedia("(prefers-color-scheme: dark)").removeEventListener(
        "change",
        handleDarkModePrefferedChange,
      )
    }
  }, [prefersDarkMode])

  return prefersDarkMode ? "dark" : "light"
}
