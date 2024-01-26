import { PostForm } from "@/components";
import prisma from "@/utils/db";

type CreatePostProps = {
  params: {
    id: string;
  }
}

const CreatePost = async ({ params }: CreatePostProps) => {

  const post = await prisma.post.findUnique({
    where: {
      id: params.id
    }
  });

  return(
    <PostForm initialData={post} />
  )
}

export default CreatePost;