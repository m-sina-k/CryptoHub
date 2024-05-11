import React from "react"

const stats = [
  {
    id: 1,
    title: "Coins",
    count: "+500",
  },
  {
    id: 2,
    title: "Fiat money suppoerted",
    count: "+20",
  },
  {
    id: 2,
    title: "trades in the past 24 hour",
    count: "+$1M",
  },
]

function Stats() {
  return (
    <div className="border-1 border-twc_border mt-8 grid grid-cols-1 gap-5 rounded-lg px-12 py-4 backdrop-blur-lg sm:grid-cols-3">
      {stats.map((stat) => (
        <section key={stat.id} className="flex flex-1 flex-col items-center">
          <span className="text-twc_primary mb-1 text-2xl font-bold">
            {stat.count}
          </span>
          <p className="text-twc_muted text-center capitalize">{stat.title}</p>
        </section>
      ))}
    </div>
  )
}

export default Stats
