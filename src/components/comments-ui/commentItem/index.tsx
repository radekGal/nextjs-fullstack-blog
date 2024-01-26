import Image from 'next/image';
import React from 'react';
import { Comments } from '../comments';

type CommentItemProps = {
  el: Comments
}

const CommentItem = ({ el }: CommentItemProps) => {
  return (
    <div className="border-b-[1px] border-slate-100 pb-6 my-5">
      <div className="flex items-start">
        {(el?.user.image && el?.user.name) ? <Image src={el?.user.image} width={42} height={42} alt={el?.user.name} className="rounded-full" /> : null}
          <div className="flex flex-col ml-3">
            <div className='flex mb-2'>
              <h3 className="capitalize font-medium mr-2">{el?.user.name}</h3>
              <h3>{el?.createAt.toDateString()}</h3>
            </div>
            <p>{el?.comment}</p>
          </div>
      </div>
    </div>
  )
}

export default CommentItem;
