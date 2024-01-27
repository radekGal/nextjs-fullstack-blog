import { activeLink } from "@/utils/activeLink"
import { dashLinks } from "@/utils/links"
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardMainProps = {
  onClick?: () => void
}

export const DashboardMain = ({ onClick }: DashboardMainProps) => {

  const path = usePathname();

  return(
    <>
      {dashLinks.map(link => (
        <Link 
          key={link.title} 
          href={link.href} 
          className={`${activeLink(path, link.href)} my-1 hover:font-bold`}
          onClick={onClick}
        >
          {link.title}
        </Link>
      ))}
      <button onClick={() => signOut({ callbackUrl: process.env.NEXTAUTH_URL })} className="my-1 hover:font-bold">Logout</button>
    </>
  )
}