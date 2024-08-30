import { DataTable } from "@/common/data-table";
import { VisualisedData } from "@/common/data-visualised";
import { MetricsComponent } from "@/common/metrics";

export default function Home() {
  return (
    <div className="px-24 flex flex-col pt-16 h-screen w-screen bg-black text-white gap-8 ">
      <MetricsComponent />
      <VisualisedData />
      <DataTable />
    </div>
  );
}
