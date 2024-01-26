import { Skeleton } from "@/components/ui/skeleton"

const HomeLoading = () => {
  return(
    <div className="h-full w-full pb-24">
      <div className="container mx-auto">
        <div className="pt-12 md:pt-36 flex items-center flex-col">
          <Skeleton className="h-10 w-[150px] mb-3" />
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <Skeleton className="h-[400px] w-full mt-12" />
        <div className="mt-6 mb-12">
          <Skeleton className="mb-2 h-4 max-w-[250px]" />
          <Skeleton className="mb-2 h-6 max-w-[450px]" />
          <div className="mt-6">
            <Skeleton className="h-[32px] w-[32px] rounded-full" />
            <Skeleton className="h-10 max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLoading;