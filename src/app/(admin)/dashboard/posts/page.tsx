import { DataTable } from "./components/data-table";
import { PostColumns, columns } from "./components/columns";
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db";
import AddNewPost from "./components/addNew";
import Heading from "@/components/ui/heading";

const DashboardPosts = async () => {

  const session = await getAuthSession();
  const posts = await prisma.post.findMany({
    where: {
      authorEmail:  session?.user?.email!
    },
    include: {
      comments: true
    },
    orderBy: {
      createAt: 'desc'
    }
  });

  const data: PostColumns[] = posts.map(post => ({
    id: post.id,
    title: post.title,
    desc: post.desc.slice(0, 70),
    authorEmail: post.authorEmail,
    createAt: new Date(post.createAt).toDateString(),
    image: post.imageUrl,
    comments: String(post?.comments.length)
  }));

  return(
    <div>
      <div className="flex items-center justify-between mb-12">
        <Heading 
          title="Posts"
          dataLength={data.length}
          subTitle="Manage yours posts"
        />
        <AddNewPost />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DashboardPosts;