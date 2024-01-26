"use client"

import { activeLink } from "@/utils/activeLink"
import { navbarLinksAuth } from "@/utils/links"
import { signOut, useSession } from "next-auth/react"
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
      {/* {status === 'unauthenticated' && <button onClick={() => signIn({ callBack :'/api/auth/signin'})} className="hover:font-bold">Login</button>} */}
      {status === 'unauthenticated' && <Link href='/api/auth/signin' className="hover:font-bold">Login</Link>}
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
          <Link href="/api/auth/signout">Logout</Link>
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