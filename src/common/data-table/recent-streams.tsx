import { DataTable } from "./data-table";
import { columns } from "./columns";

import { streams } from "@/data";

export function RecentStreams() {
  return (
    <div className="pb-12 ">
      <div>
        <DataTable columns={columns} data={streams} />
      </div>
    </div>
  );
}
