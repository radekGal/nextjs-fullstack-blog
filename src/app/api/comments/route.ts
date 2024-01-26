import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utils/db';
import { getAuthSession } from "@/utils/auth";

export const POST = async (req: NextRequest) => {

  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json('Not Authenticated!', { status: 401 })
  }

  try {
    const body = await req.json();

    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user?.email
      }
    });

    return NextResponse.json(comment, { status: 200 });

  } catch (err) {
    return NextResponse.json('Something went wrong!', { status: 500 })
  }

}