"use client"

import { ResponsiveLine } from "@nivo/line"

interface LineChartProps {
  chartData: {
    id: string
    chartColor: "green" | "red"
    data: string[]
  }
}

function LineChart({ chartData }: LineChartProps) {
  const convertData = (data: string[]) => {
    return data.map((item, index) => ({
      x: ++index,
      y: item,
    }))
  }

  const data = [
    {
      id: chartData.id,
      color: chartData.chartColor,
      data: convertData(chartData.data),
    },
  ]

  return (
    <ResponsiveLine
      data={data}
      enablePoints={false}
      yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
      enableGridX={false}
      enableGridY={false}
      axisBottom={null}
      axisLeft={null}
      colors={chartData.chartColor === "green" ? "#00a68c" : "#d9475a"}
    />
  )
}

export default LineChart
