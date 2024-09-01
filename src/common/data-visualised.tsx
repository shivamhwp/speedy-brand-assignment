import { TopFiveStreams } from "./charts/TopFiveStreams";
import { UserGrowthChart } from "./charts/UserGrowthChart";

export function VisualisedData() {
  return (
    <div className=" flex w-full max-lg:flex-col gap-8 ">
      <div className="w-1/2 max-lg:w-full h-auto flex  ">
        <UserGrowthChart />
      </div>
      <div className="w-1/2 max-lg:w-full h-full flex   ">
        <TopFiveStreams />
      </div>
    </div>
  );
}
