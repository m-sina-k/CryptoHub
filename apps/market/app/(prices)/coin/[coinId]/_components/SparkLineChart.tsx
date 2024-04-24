"use client"

import { ResponsiveLine } from "@nivo/line"
import { useStore } from "~/store"
import { CoinDetails } from "~/types"
import { formatCoinPrice } from "~/utils/helpers"

interface SparkLineChartProps {
  coin: CoinDetails
}

function SparkLineChart({ coin }: SparkLineChartProps) {
  const { theme } = useStore((state) => state)
  const isLightTheme = theme.value === "light"

  const convertData = (data: (string | null)[]) => {
    return data.map((item, index) => ({
      x: ++index,
      y: item,
    }))
  }

  const data = [
    {
      id: coin.name,
      data: convertData(coin.sparkline),
    },
  ]
  return (
    <ResponsiveLine
      data={data}
      axisTop={null}
      axisRight={null}
      colors={"#2ea5fb"}
      xScale={{ type: "point" }}
      margin={{ top: 30, right: 10, bottom: 25, left: 50 }}
      yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
      axisLeft={{
        format: (value) => value.toLocaleString(),
      }}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: isLightTheme ? "#000000" : "#FFFFFF",
            },
          },
        },
        grid: {
          line: {
            stroke: isLightTheme ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
          },
        },
        tooltip: {
          container: {
            background: "#FFFFFF",
            color: "#000000",
            fontSize: "12px",
            borderRadius: "2px",
          },
        },
      }}
      tooltip={(value) => {
        return (
          <span className="border-1 rounded-sm bg-white px-3 py-1 text-xs text-black shadow-md">
            {String(value.point.data.x)} :{" "}
            {formatCoinPrice(String(value.point.data.y))}
          </span>
        )
      }}
      enableGridX={false}
      enablePoints={false}
      enableArea={true}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[]}
    />
  )
}

export default SparkLineChart
