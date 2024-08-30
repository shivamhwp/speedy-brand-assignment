import { VisualisedData } from "@/common/data-visualised";
import { MetricsComponent } from "@/common/metrics";
import { ModeToggle } from "@/common/extra/mode-toggle";
import { RecentStreams } from "@/common/data-table/recent-streams";

export default function Home() {
  return (
    <div className="px-24 flex flex-col pt-16 h-screen w-screen  gap-8 ">
      <div className="top-4 flex right-4 z-50  justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <ModeToggle />
      </div>
      <MetricsComponent />
      <VisualisedData />
      <RecentStreams />
    </div>
  );
}
