import React from 'react'
import { CommentItem } from '../..'
import { Comments } from '../comments'

type CommentsListProps = {
  comments: Comments[];
} 

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <>
      {comments.map((comment: Comments) => (
        <CommentItem key={comment.id} el={comment}/>
      ))}
    </>
  )
}

export default CommentsList;
