"use client";

import { type PropsWithChildren } from 'react';
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Skeleton } from '@/components/ui/skeleton';

export const CommentsShow = ({ children }: PropsWithChildren ) => {

  const path = usePathname();
  const { status } = useSession();

  return(
    <>
      {status === 'loading' && <Skeleton className="h-20 w-[50vw] py-10" />}
      {status === 'unauthenticated' && (
        <div className="my-10">
          <h2 className="font-medium mb-2">Want to add a comment? Please Login</h2>
          <Button onClick={() => signIn('google', { callBackUrl: path })} className="hover:font-bold">Login</Button>
        </div>
      )}
      {status === 'authenticated' && children}
    </>
  )
}