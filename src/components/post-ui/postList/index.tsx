import type { Post } from '@prisma/client';
import { PostItem } from '../..';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getPosts } from '@/utils/getPosts';

const PostList = async () => {
  const data  = await getPosts();
  const posts = data.slice(1, 6);

  return(
    <div className="flex mt-20 pb-20">
      <div className='container mx-auto'>
      {posts.length > 0 ? 
        (
          <>
            <Heading
              title="Latest Posts"
            />
            <div className="flex mt-7 flex-wrap -mx-2">
              {posts.map((post: Post) => (
                <PostItem key={post.id} className='w-full md:w-2/4 lg:w-1/3 px-2 my-3' height='400px' item={post} />
              ))}
            </div>
          </>
        ) : <div>Nothing to show...</div>}
        <div className='flex justify-center w-3/3 mt-20'>
          <Button asChild>
            <Link href="/posts">
              See More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostList;