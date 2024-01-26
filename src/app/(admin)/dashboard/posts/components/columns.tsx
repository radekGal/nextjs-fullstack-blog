"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export type PostColumns = {
  id: string;
  createAt: string;
  title: string;
  desc: string;
  image: string | null;
  authorEmail: string;
  comments?: string;
}

export const columns: ColumnDef<PostColumns>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return(
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "desc",
    header: "Description"
  },
  {
    accessorKey: "createAt",
    header: ({ column }) => {
      return(
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "comments",
    header: ({ column }) => {
      return(
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Comments
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
]