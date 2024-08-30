import { TopFiveStreams } from "./charts/TopFiveStreams";
import { UserGrowthChart } from "./charts/UserGrowthChart";

export function VisualisedData() {
  return (
    <div className=" flex w-full gap-8 ">
      <div className="w-1/2 h-auto flex  ">
        <UserGrowthChart />
      </div>
      <div className="w-1/2 h-full flex   ">
        <TopFiveStreams />
      </div>
    </div>
  );
}
