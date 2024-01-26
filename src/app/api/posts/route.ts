import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utils/db';
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: NextRequest) => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createAt: 'desc'
    },
    include: {
      author: true
    }
  });
  return NextResponse.json(posts);
}


export const POST = async (req: NextRequest) => {

  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: 'Not Authorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: {
        ...body,
        authorEmail: session.user?.email
      }
    });

    return NextResponse.json(post, { status: 200 })
  } catch (err) {
    return NextResponse.json('Something went wrong!', { status: 500 })
  }
}
