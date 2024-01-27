import { PostList, Hero, Featured } from '@/components';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <PostList />
    </div>
  )
}