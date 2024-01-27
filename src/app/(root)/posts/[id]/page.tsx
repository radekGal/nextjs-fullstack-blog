import { Comments } from "@/components";
import { MdxPreview } from "@/components/ui/mdx-preview";
import Image from "next/image";

const getData = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
    {
      cache: "no-store",
    }
  );
  if(!res.ok) {
    throw new Error('Someting goes wrong...');
  }
  return res.json();
}

const SinglePost = async ({ params }: { params: { id: string }}) => {
  const { id } = params;
  const data = await getData(id);
  const createDate = new Date(data?.createAt);

  return(
    <div className="container mx-auto">
      <h3 className="text-center mt-36">Published {createDate?.toDateString()}</h3>
      <h4 className="text-center capitalize">By {data?.author?.name}</h4>
      <div className="flex flex-col items-center mt-8 mb-24">
        <h1 className="text-5xl md:text-8xl font-black uppercase sm:text-center">{data?.title}</h1>
      </div>
      <Image 
        src={data?.imageUrl} 
        alt={data?.title}  
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: '70vh', width: '100%' }}
        priority={true}
        className="mb-8"
      />
      <MdxPreview source={data?.desc} />
      <Comments postId={id} />
    </div>
  );
}

export default SinglePost;