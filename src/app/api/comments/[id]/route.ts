import { NextResponse } from "next/server";
import prisma from '@/utils/db';
import { getAuthSession } from "@/utils/auth";

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {

  const session = await getAuthSession();

  if (!session) return NextResponse.json({}, { status: 401 });

  const { id } = params;

  try {

    const commentFind = await prisma.comment.findUnique({
      where: {
        id,
        userEmail: session?.user?.email!
      }
    });

    if (!commentFind) {
      return NextResponse.json({ error: "Invalid post" }, { status: 404 });
    }

    await prisma.comment.delete({
      where: {
        id: commentFind.id
      }
    })

    return NextResponse.json({});
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }

}