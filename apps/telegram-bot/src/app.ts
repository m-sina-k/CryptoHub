import * as dotenv from "dotenv"
import { Telegraf } from "telegraf"

import { fetchCoinPrice, welcomeMessage } from "./utils/helpers"

dotenv.config()

const bot = new Telegraf(process.env["TELEGRAM_BOT_TOKEN"]!)

bot.start(async (ctx) => {
  await bot.telegram.sendMessage(ctx.chat.id, welcomeMessage(), {
    parse_mode: "HTML",
  })
})
bot.help(async (ctx) => {
  await bot.telegram.sendMessage(ctx.chat.id, welcomeMessage(), {
    parse_mode: "HTML",
  })
})
bot.command("price", (ctx) => fetchCoinPrice(ctx))
bot.launch().then(() => {})

// Enable graceful stop
process.once("SIGINT", () => {
  bot.stop("SIGINT")
})
process.once("SIGTERM", () => {
  bot.stop("SIGTERM")
})
