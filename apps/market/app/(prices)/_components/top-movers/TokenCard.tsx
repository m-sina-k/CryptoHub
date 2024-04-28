import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@ui/lib/utils"
import LineChart from "~/components/common/LineChart"
import { Coin } from "~/types"

interface TokenCardProps {
  token: Coin
}

function TokenCard({ token }: TokenCardProps) {
  const isChangeNegative = token.change.startsWith("-")

  return (
    <div key={token.uuid} className="bg-twc_accent h-full rounded-sm p-5">
      <Link href={`/coin/${token.uuid}`}>
        <div className="flex items-center justify-between">
          <section>
            <Image
              width={24}
              height={24}
              alt={token.symbol}
              src={token.iconUrl}
            />
            <p className="mt-2 flex gap-2 truncate">
              {token.name}
              <span className="text-twc_muted">{token.symbol}</span>
            </p>
          </section>
          <section className="h-[30px] w-[120px] overflow-hidden">
            <LineChart
              chartData={{
                id: token.name,
                chartColor: isChangeNegative ? "red" : "green",
                data: token.sparkline,
              }}
            />
          </section>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-bold text-xl">
            ${parseInt(token.price.split(".")[0] as string).toLocaleString()}.
            {parseInt(token.price.split(".")[1] as string)
              .toString()
              .slice(0, 2)}
          </p>
          <p className={cn("text-green", isChangeNegative && "text-red")}>
            {!isChangeNegative && "+"}
            {token.change}%
          </p>
        </div>
      </Link>
    </div>
  )
}

export default TokenCard
