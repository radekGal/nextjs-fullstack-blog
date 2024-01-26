"use client"

import { activeLink } from "@/utils/activeLink"
import { navbarLinksAuth } from "@/utils/links"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type AuthNavProps = {
  onClick?: () => void
}

export const AuthNav = ({ onClick }: AuthNavProps) => {

  const { status, data } = useSession();
  const path = usePathname();

  return(
    <>
      {status === 'loading' && <span>Login</span>}
      {status === 'unauthenticated' && <button onClick={() => signIn()} className="hover:font-bold">Login</button>}
      {status === 'authenticated' && (
        <>
          {navbarLinksAuth.map(link => (
            <Link 
              key={link.title} 
              href={link.href} 
              className={`${activeLink(path, link.href)} hover:font-bold my-1 md:my-0`} 
              onClick={onClick}
            >
              {link.title}
            </Link>
          ))}
          <button 
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })} 
            className="hover:font-bold my-1 md:my-0"
          >
            Logout
          </button>
          <Image 
            width={30} height={30} 
            src={data?.user?.image as string} 
            alt={data?.user?.name as string} 
            className="rounded-full mt-2 md:mt-0" 
          />
        </>
      )}
    </>
  )
}