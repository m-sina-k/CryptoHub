import { Config } from "tailwindcss"

import sharedConfig from "../../packages/ui/tailwind.config"

const config = {
  presets: [sharedConfig],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
} satisfies Omit<Config, "content">

export default config
