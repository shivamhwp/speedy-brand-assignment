import { VisualisedData } from "@/common/data-visualised";
import { MetricsComponent } from "@/common/metrics";
import { ModeToggle } from "@/common/extra/mode-toggle";
import { RecentStreams } from "@/common/data-table/recent-streams";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="px-24 flex flex-col pt-16 h-screen w-screen  gap-8 ">
      <div className="top-4 flex right-4 z-50 justify-between">
        <div className="text-4xl font-bold gap-3 flex">Dashboard</div>
        <div className="flex  items-center justify-center gap-2">
          <ModeToggle />
          <Link
            href="https://github.com/shivamhwp/speedy-brand-assignment"
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
      <MetricsComponent />
      <VisualisedData />
      <RecentStreams />
    </div>
  );
}
