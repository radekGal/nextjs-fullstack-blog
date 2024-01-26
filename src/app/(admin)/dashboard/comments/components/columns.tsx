"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export type PostColumns = {
  id: string;
  comment: string;
  createAt: string;
  postTitle: string;
  postId?: string;
}

export const columns: ColumnDef<PostColumns>[] = [
  {
    accessorKey: "comment",
    header: ({ column }) => {
      return(
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Comment
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "postTitle",
    header: ({ column }) => {
      return(
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Post
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
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
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
]