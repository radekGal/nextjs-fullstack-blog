"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const AddNewPost = () => {

  const router = useRouter();

  return(
    <Button onClick={() => router.push('/dashboard/posts/new')}>
      <Plus className="mr-2 h-4 w-4" />
      Add New
    </Button>
  );
}

export default AddNewPost;