"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", clv: 222, cac: 150 },
  { date: "2024-04-02", clv: 97, cac: 180 },
  { date: "2024-04-03", clv: 167, cac: 120 },
  { date: "2024-04-04", clv: 242, cac: 260 },
  { date: "2024-04-05", clv: 373, cac: 290 },
  { date: "2024-04-06", clv: 301, cac: 340 },
  { date: "2024-04-07", clv: 245, cac: 180 },
  { date: "2024-04-08", clv: 409, cac: 320 },
  { date: "2024-04-09", clv: 59, cac: 110 },
  { date: "2024-04-10", clv: 261, cac: 190 },
  { date: "2024-04-11", clv: 327, cac: 350 },
  { date: "2024-04-12", clv: 292, cac: 210 },
  { date: "2024-04-13", clv: 342, cac: 380 },
  { date: "2024-04-14", clv: 137, cac: 220 },
  { date: "2024-04-15", clv: 120, cac: 170 },
  { date: "2024-04-16", clv: 138, cac: 190 },
  { date: "2024-04-17", clv: 446, cac: 360 },
  { date: "2024-04-18", clv: 364, cac: 410 },
  { date: "2024-04-19", clv: 243, cac: 180 },
  { date: "2024-04-20", clv: 89, cac: 150 },
  { date: "2024-04-21", clv: 137, cac: 200 },
  { date: "2024-04-22", clv: 224, cac: 170 },
  { date: "2024-04-23", clv: 138, cac: 230 },
  { date: "2024-04-24", clv: 387, cac: 290 },
  { date: "2024-04-25", clv: 215, cac: 250 },
  { date: "2024-04-26", clv: 75, cac: 130 },
  { date: "2024-04-27", clv: 383, cac: 420 },
  { date: "2024-04-28", clv: 122, cac: 180 },
  { date: "2024-04-29", clv: 315, cac: 240 },
  { date: "2024-04-30", clv: 454, cac: 380 },
  { date: "2024-05-01", clv: 165, cac: 220 },
  { date: "2024-05-02", clv: 293, cac: 310 },
  { date: "2024-05-03", clv: 247, cac: 190 },
  { date: "2024-05-04", clv: 385, cac: 420 },
  { date: "2024-05-05", clv: 481, cac: 390 },
  { date: "2024-05-06", clv: 498, cac: 520 },
  { date: "2024-05-07", clv: 388, cac: 300 },
  { date: "2024-05-08", clv: 149, cac: 210 },
  { date: "2024-05-09", clv: 227, cac: 180 },
  { date: "2024-05-10", clv: 293, cac: 330 },
  { date: "2024-05-11", clv: 335, cac: 270 },
  { date: "2024-05-12", clv: 197, cac: 240 },
  { date: "2024-05-13", clv: 197, cac: 160 },
  { date: "2024-05-14", clv: 448, cac: 490 },
  { date: "2024-05-15", clv: 473, cac: 380 },
  { date: "2024-05-16", clv: 338, cac: 400 },
  { date: "2024-05-17", clv: 499, cac: 420 },
  { date: "2024-05-18", clv: 315, cac: 350 },
  { date: "2024-05-19", clv: 235, cac: 180 },
  { date: "2024-05-20", clv: 177, cac: 230 },
  { date: "2024-05-21", clv: 82, cac: 140 },
  { date: "2024-05-22", clv: 81, cac: 120 },
  { date: "2024-05-23", clv: 252, cac: 290 },
  { date: "2024-05-24", clv: 294, cac: 220 },
  { date: "2024-05-25", clv: 201, cac: 250 },
  { date: "2024-05-26", clv: 213, cac: 170 },
  { date: "2024-05-27", clv: 420, cac: 460 },
  { date: "2024-05-28", clv: 233, cac: 190 },
  { date: "2024-05-29", clv: 78, cac: 130 },
  { date: "2024-05-30", clv: 340, cac: 280 },
  { date: "2024-05-31", clv: 178, cac: 230 },
  { date: "2024-06-01", clv: 178, cac: 200 },
  { date: "2024-06-02", clv: 470, cac: 410 },
  { date: "2024-06-03", clv: 103, cac: 160 },
  { date: "2024-06-04", clv: 439, cac: 380 },
  { date: "2024-06-05", clv: 88, cac: 140 },
  { date: "2024-06-06", clv: 294, cac: 250 },
  { date: "2024-06-07", clv: 323, cac: 370 },
  { date: "2024-06-08", clv: 385, cac: 320 },
  { date: "2024-06-09", clv: 438, cac: 480 },
  { date: "2024-06-10", clv: 155, cac: 200 },
  { date: "2024-06-11", clv: 92, cac: 150 },
  { date: "2024-06-12", clv: 492, cac: 420 },
  { date: "2024-06-13", clv: 81, cac: 130 },
  { date: "2024-06-14", clv: 426, cac: 380 },
  { date: "2024-06-15", clv: 307, cac: 350 },
  { date: "2024-06-16", clv: 371, cac: 310 },
  { date: "2024-06-17", clv: 475, cac: 520 },
  { date: "2024-06-18", clv: 107, cac: 170 },
  { date: "2024-06-19", clv: 341, cac: 290 },
  { date: "2024-06-20", clv: 408, cac: 450 },
  { date: "2024-06-21", clv: 169, cac: 210 },
  { date: "2024-06-22", clv: 317, cac: 270 },
  { date: "2024-06-23", clv: 480, cac: 530 },
  { date: "2024-06-24", clv: 132, cac: 180 },
  { date: "2024-06-25", clv: 141, cac: 190 },
  { date: "2024-06-26", clv: 434, cac: 380 },
  { date: "2024-06-27", clv: 448, cac: 490 },
  { date: "2024-06-28", clv: 149, cac: 200 },
  { date: "2024-06-29", clv: 103, cac: 160 },
  { date: "2024-06-30", clv: 446, cac: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  clv: {
    label: "clv",
    color: "var(--chart-4)",
  },
  cac: {
    label: "cac",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export default function KpiChart() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillclv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-clv)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-clv)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillcac" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cac)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cac)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={"equidistantPreserveStart"}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="cac"
              type="natural"
              fill="url(#fillcac)"
              stroke="var(--color-cac)"
              name="CAC"
            />
            <Area
              dataKey="clv"
              type="natural"
              fill="url(#fillclv)"
              stroke="var(--color-clv)"
              name="CLV"
            />
            <YAxis domain={['dataMin', 'dataMax']} />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
