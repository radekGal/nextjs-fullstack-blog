import { getPosts } from "@/utils/getPosts"
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const SidebarPosts = async () => {

  const data = await getPosts();
  const posts = data.slice(0, 2);

  return(
    <div>
      <h3 className="font-bold text-lg mb-3">Latest Posts</h3>
      {posts && posts.map((post: Post) => (
        <Link href={`/posts/${post.id}`} key={post.id} className="w-full">
          <Image src={post.imageUrl!} alt={post.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '240px' }} />
          <h4 className="mt-2 mb-5 font-medium">{post.title}</h4>
        </Link>
      ))}
    </div>
  )
}