import { NextResponse } from "next/server";
import prisma from '@/utils/db';
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const post = await prisma.post.findFirst({
      where: {
        id
      },
      include: {
        author: true
      }
    });

    return NextResponse.json(post, { status: 200 })

  } catch (err) {

    return NextResponse.json(err, { status: 500 });
  }
}


export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {

  const session = await getAuthSession();
  if (!session) return NextResponse.json({}, { status: 401 });

  const { id } = params;

  try {

    const body = await req.json();

    const postFind = await prisma.post.findUnique({
      where: {
        id,
        authorEmail: session?.user?.email!
      }
    })

    if (!postFind) {
      return NextResponse.json({ error: "Invalid post" }, { status: 404 });
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postFind.id
      },
      data: {
        ...body
      }
    });

    return NextResponse.json(updatedPost, { status: 200 });

  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }

}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {

  const session = await getAuthSession();

  if (!session) return NextResponse.json({}, { status: 401 });

  const { id } = params;

  try {

    const postFind = await prisma.post.findUnique({
      where: {
        id,
        authorEmail: session?.user?.email!
      }
    });

    if (!postFind) {
      return NextResponse.json({ error: "Invalid post" }, { status: 404 });
    }

    await prisma.post.delete({
      where: {
        id: postFind.id
      }
    })

    return NextResponse.json({});
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }

}