import { PostForm } from "@/components";
import prisma from "@/utils/db";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = async ({ params }: { params: { id: string }}) => {

  const post = await prisma.post.findUnique({
    where: {
      id: params.id
    }
  });

  return(
    <>
      <PostForm initialData={post} />
      <ToastContainer />
    </>
  )
}

export default CreatePost;