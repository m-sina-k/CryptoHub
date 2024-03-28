import { Config } from "tailwindcss"

import sharedConfig from "@repo/ui/tailwind.config"

const config = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        docColor: "lime",
      },
    },
  },
} satisfies Omit<Config, "content">

export default config
