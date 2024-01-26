import { Skeleton } from "@/components/ui/skeleton";

const PostsLoading = () => {
  return(
    <div>
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col space-y-10">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
      <div className="space-y-10">
        <Skeleton className="h-4 max-w-[1150px]" />
        <Skeleton className="h-6 max-w-[1150px]" />
        <Skeleton className="h-6 max-w-[1150px]" />
        <Skeleton className="h-6 max-w-[1150px]" />
      </div>
    </div>
  );
}

export default PostsLoading;