"use client";

import { Pie, PieChart } from "recharts";
import { LabelList } from "recharts";
import {
  Card,
  CardContent,
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
import { CardDescription } from "@/components/ui/card";
const chartData = [
  { channel: "subs", visitors: 275, fill: "var(--color-subs)" },
  { channel: "ads", visitors: 200, fill: "var(--color-ads)" },
  { channel: "organic", visitors: 173, fill: "var(--color-organic)" },
  { channel: "influencers", visitors: 187, fill: "var(--color-influencers)" },

  { channel: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  subs: {
    label: "subs",
    color: "hsl(var(--chart-1))",
  },
  ads: {
    label: "ads",
    color: "hsl(var(--chart-2))",
  },
  influencers: {
    label: "influencers",
    color: "hsl(var(--chart-3))",
  },
  organic: {
    label: "organic",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function RevenueDistribution() {
  return (
    <Card className="flex flex-col rounded-xl h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>in million dollars</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="channel"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Revenue distribution among different channels
        </div>
      </CardFooter>
    </Card>
  );
}
