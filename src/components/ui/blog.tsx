import { Post } from "@prisma/client";
import { PostItem } from "..";

type Author = {
  author?: {
    name?: string;
    image?: string;
  }[]
}

type BlogListProps = {
  data: Post[] & Author;
}

export const BlogList = async ({ data }: BlogListProps) => {
  return(
    <div className="flex flex-col w-full md:w-9/12">
      {data?.length > 0 ? (
        data?.map((post: Post) => (
          <PostItem key={post?.id} className="mb-[48px]" height='650px' item={post} />
        ))
      ) : <h2 className="font-medium">Opsss... The post you are looking for does not exist.</h2>}
    </div>
  )
}