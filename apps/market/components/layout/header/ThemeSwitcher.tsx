"use client"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui/components"
import { cn } from "@ui/lib/utils"
import { Theme, useStore } from "~/store"
import { useBrowserTheme } from "~/utils/hooks/useBrowserTheme"
import { MoonIcon, SunIcon } from "lucide-react"

function ThemeSwitcher() {
  const browserTheme = useBrowserTheme()
  const { theme, setTheme } = useStore((state) => state)

  const themeOptions: Theme[] = [
    {
      name: "light",
      value: "light",
    },
    {
      name: "dark",
      value: "dark",
    },
    {
      name: "system",
      value: browserTheme,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="flex h-8 w-8 p-1.5">
          {theme.name === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.name}
            className={cn(
              "capitalize",
              theme.name === option.name && "text-brand hover:!text-brand",
            )}
            onClick={() => setTheme({ name: option.name, value: option.value })}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitcher
