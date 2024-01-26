import React from 'react'
import { CommentForm, CommentsList } from '../..';
import prisma from '@/utils/db';
import { Comment, User } from '@prisma/client';
import Heading from '@/components/ui/heading';

export type Comments = Comment & {
  user: User
}

const Comments = async ({ postId }: { postId: string }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId
    },
    include: {
      user: true
    }
  });

  return (
    <div className="mt-8">
      <Heading title="Comments" />
      {comments.length > 0 ? <CommentsList comments={comments} /> : <span>No comments to show... Add one!</span>}
      <CommentForm postId={postId} />
    </div>
  );
}

export default Comments;
