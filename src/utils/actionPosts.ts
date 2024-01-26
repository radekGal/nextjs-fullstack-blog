import prisma from "./db";

type IGetPost = {
  search?: string | undefined;
  skip?: number;
  take?: number;
}

export const GetPost = async ({ search, skip = 0, take = 5 }: IGetPost) => {
  const data = await prisma.post.findMany({
    skip: skip,
    take: take,
    where: {
      title: {
        contains: search,
        mode: 'insensitive'
      }
    },
    include: {
      author: true
    }, 
    orderBy: {
      createAt: 'desc'
    },
  });

  const totalPosts = await prisma.post.count({
    where: {
      title: {
        contains: search
      }
    }
  })

  const totalPages = Math.ceil(totalPosts / take);

  return { data, totalPages }
}