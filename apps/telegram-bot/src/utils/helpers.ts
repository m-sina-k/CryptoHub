import axios from "axios"

const formatCoinPrice = (price: string) => {
  return (
    parseInt(price.split(".")[0]).toLocaleString() +
    "." +
    parseInt(price.split(".")[1]).toString().slice(0, 2) +
    " USD"
  )
}

export const fetchCoinPrice = async (ctx: any) => {
  const coinName = ctx.payload
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/search-suggestions",
      params: {
        query: coinName,
      },
      headers: {
        "X-RapidAPI-Key": process.env.COINRANK_API_KEY,
        "X-RapidAPI-Host": process.env.COINRANK_HOST,
      },
    })
    const coin = response.data.data.coins[0]
    if (coin) {
      ctx.reply(
        `${coin.symbol}\n ${coin.name} \n Price: ${formatCoinPrice(coin.price)}`,
      )
    } else {
      ctx.reply(
        "Unable to find the requested coin. Please provide another coin name.",
      )
    }
  } catch (error) {
    console.error(error)
    ctx.reply("Error while fetching coin price. Please try again later.")
  }
}

export const welcomeMessage = () => {
  return (
    "Hello, I'm @cphub_price_bot. \n\n" +
    "<b>Command list: </b>\n\n" +
    "<b><i>/price &lt;coin name | coin symbol&gt; </i> :</b> To get the latest price of a coin by it's name or symbol. If the name or symbol is not provided, Bitcoin price will be fetched by default \n\n"
  )
}
