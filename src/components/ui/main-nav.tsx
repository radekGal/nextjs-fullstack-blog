import { activeLink } from "@/utils/activeLink"
import { navbarLinksMain } from "@/utils/links"
import Link from "next/link"
import { usePathname } from "next/navigation"

type MainNavProps = {
  onClick?: () => void
}

export const MainNav = ({ onClick }: MainNavProps) => {

  const path = usePathname();

  return(
    <>
      {navbarLinksMain.map(link => (
        <Link 
          key={link.title} 
          href={link.href} 
          className={`${activeLink(path, link.href)} hover:font-bold my-1 md:my-0`} 
          onClick={onClick}
        >
          {link.title}
        </Link>
      ))}
    </>
  )
}