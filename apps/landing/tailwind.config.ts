import { Config } from "tailwindcss"

import sharedConfig from "../../packages/ui/tailwind.config"

const config = {
  presets: [sharedConfig],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "90%",
        lg: "900px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
} satisfies Omit<Config, "content">

export default config
