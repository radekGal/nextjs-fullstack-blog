import { Hero } from "@/components";
import { BlogList } from "@/components/ui/blog";
import { PaginationUi } from "@/components/ui/pagination-ui";
import { SearchBar } from "@/components/ui/search";
import { SidebarPosts } from "@/components/ui/sidebar-posts";
import { GetPost } from "@/utils/actionPosts";

type PostsProps = {
  searchParams: {
    query?: string;
    page?: string;
    take?: string;
  }
}

const Posts = async ({ searchParams }: PostsProps) => {

  const search = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const take = Number(searchParams?.take) || 5;
  const skip = (currentPage - 1) * take;

  const { data, totalPages } = await GetPost({ take, skip, search });
    
  return(
    <div className="min-h-screen mt-[144px] pb-20">
      <Hero />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <BlogList data={data} />
          <div className="w-full md:w-3/12 md:pl-[8px] lg:pl-[18px]">
            <SearchBar placeholder="Search..." className="flex-1" />
            <SidebarPosts />
          </div>
        </div>
      </div>
      <PaginationUi totalPages={totalPages} />
    </div>
  );
}

export default Posts;