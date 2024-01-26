import { getAuthSession } from "@/utils/auth";
import { DataTable } from "../posts/components/data-table";
import { PostColumns, columns } from "./components/columns";
import prisma from "@/utils/db";
import Heading from "@/components/ui/heading";

const DashboardComments = async () => {

  const session = await getAuthSession();
  const comments = await prisma.comment.findMany({
    where: {
      userEmail: session?.user?.email!
    },
    include: {
      post: true
    },
    orderBy: {
      createAt: 'desc'
    }
  });

  const data: PostColumns[] = comments.map(comment => ({
    id: comment.id,
    comment: comment.comment,
    authorEmail: comment.userEmail,
    createAt: new Date(comment.createAt).toDateString(),
    postTitle: comment.post.title,
    postId: comment.postId
  }));

  return(
    <div>
      <div className="flex items-center justify-between mb-12">
        <Heading
          title="Comments"
          dataLength={data.length}
          subTitle="Manage yours comments"
        />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DashboardComments;