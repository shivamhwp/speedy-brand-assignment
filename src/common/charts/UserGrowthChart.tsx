"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
const chartData = [
  { month: "January", desktop: 1345678 },
  { month: "February", desktop: 1578392 },
  { month: "March", desktop: 2375738 },
  { month: "April", desktop: 3456789 },
  { month: "May", desktop: 4567890 },
  { month: "June", desktop: 5678901 },
  { month: "July", desktop: 6789012 },
  { month: "August", desktop: 6489012 },
  { month: "September", desktop: 7890123 },
  { month: "October", desktop: 8901234 },
  { month: "November", desktop: 8889898 },
  { month: "December", desktop: 9999999 },
];

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function UserGrowthChart() {
  return (
    <Card className="w-full rounded-xl ">
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>January - December 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing user growth for the past 12 months
        </div>
      </CardFooter>
    </Card>
  );
}
