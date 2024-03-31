import { Config } from "tailwindcss"

import sharedConfig from "../../packages/ui/tailwind.config"

const config = {
  presets: [sharedConfig],
} satisfies Omit<Config, "content">

export default config
