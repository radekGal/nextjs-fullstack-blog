"use client"

import { useSession } from "next-auth/react"
import Image from "next/image";

export const DashboardAvatar = () => {

  const { status, data } = useSession();

  return(
    <div className="mb-12">
      {status === 'loading' && <h3>Loading...</h3>} 
      {status === 'authenticated' && 
        <div className="flex flex-col">
          <Image src={data?.user?.image as string} alt={data?.user?.name! || 'User'} width={32} height={32} className="rounded-full" />
          <div className="hidden md:flex md:flex-col mt-2">
            <h3 className="text-base font-medium capitalize">{data?.user?.name}</h3>
            <h4 className="text-xs">{data?.user?.email}</h4>
          </div>
        </div>
      }
    </div>
  )
}