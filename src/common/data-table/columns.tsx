"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

import { Stream } from "@/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Stream>[] = [
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => {
      return (
        <Button
          className="flex pl-0 "
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Streams
          <ArrowUpDown className="ml-2 h-4 w-4 hover:bg-slate-200 " />
        </Button>
      );
    },
  },
  {
    accessorKey: "dateStreamed",
    header: ({ column }) => {
      return (
        <Button
          className="flex pl-0 "
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Streamed
          <ArrowUpDown className="ml-2 h-4 w-4 hover:bg-slate-200 " />
        </Button>
      );
    },
  },
];
