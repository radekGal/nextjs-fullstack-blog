import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { MdxPreview } from "@/components/ui/mdx-preview";
import { PostCreator } from "../postCreator";

type PostItemProps = {
  item: Post &  {
    author?: {
      name: string;
      image: string;
    };
  }
  className?: string;
  height: string;
}

const PostItem = ({ item, className, height }: PostItemProps) => {
  return(
    <Link href={`/posts/${item.id}`} className={`${className} mb-6`}>
      <>
       <Image 
          src={item.imageUrl!} 
          alt="image"  
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: `${height}` }}
        />
        <div className="mt-4">
          <h2 className="font-bold text-lg">{item.title}</h2>
          <MdxPreview source={`${item.desc.slice(0, 120)}...`} />
          <PostCreator image={item?.author?.image} creator={item?.author?.name} date={new Date(`${item.createAt}`).toDateString()} />
        </div>
      </>
    </Link>
  );
}

export default PostItem;