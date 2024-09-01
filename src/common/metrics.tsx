import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { RevenueDistribution } from "./charts/RevenueDistributionChart";

export function MetricsComponent() {
  return (
    <div className=" flex w-full max-lg:flex-col h-auto gap-8 max-lg:gap-6">
      <div className=" w-1/2 max-lg:w-full flex-col flex gap-8 max-lg:gap-6 h-full">
        <div className="flex gap-6 w-full">
          <CardComponent title="Total Users" content="69.9 million" />
          <CardComponent title="Active Users" content="4.2 million" />
        </div>
        <div className="flex gap-6 w-full">
          <CardComponent title="Total Streams" content="69 billion" />
          <CardComponent title="Revenue" content="$420 million" />
        </div>
        <CardComponent
          title="Top Artist"
          content="Trent Reznor & Atticus Ross"
        />
      </div>
      <div className="w-1/2 max-lg:w-full rounded-xl">
        <RevenueDistribution />
      </div>
    </div>
  );
}

export default function CardComponent(props: {
  title?: string;
  content?: string;
}) {
  return (
    <Card className=" rounded-xl w-full pb-4">
      <CardHeader className="pb-2">
        <CardDescription className="">{props.title}</CardDescription>
        <CardTitle className="text-4xl">{props.content}</CardTitle>
      </CardHeader>
    </Card>
  );
}
