import Image from "next/image";
import Link from "next/link";
import { PostCreator } from "../post-ui/postCreator";
import { getPosts } from "@/utils/getPosts";

const Featured = async () => {

  const posts = await getPosts();
  const post = posts.at(0);

  return(
    <section>
      {post && 
        <div className="container mx-auto">
          <Link href={`/posts/${post?.id}`}>
            <Image 
              src={post?.imageUrl}
              alt="image"  
              width={0}
              height={0}
              sizes="100vw"
              className="h-[400px] w-full md:h-[600px] lg:h-[800px]"
              priority={true}
            />
            <div className="mt-6 mb-12">
              <h2 className="text-2xl font-bold mb-2">{post?.title}</h2>
              <p>{post?.desc?.slice(0, 120)}...</p>
              <PostCreator image={post?.author?.image} creator={post?.author?.name} date={new Date(`${post?.createAt}`).toDateString()} />
            </div>
          </Link>
        </div>
      }
    </section>
  );
}

export default Featured;