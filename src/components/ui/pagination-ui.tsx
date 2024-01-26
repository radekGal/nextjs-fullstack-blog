"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "./button";

type PaginationUiProps = {
  totalPages: number;
}

export const PaginationUi = ({ totalPages }: PaginationUiProps ) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return(
    <>
      {pages.length > 0 &&
        <div className="container mx-auto py-12 text-center">
          <Button asChild variant="ghost" className="mx-1">
            <Link href={createPageURL(currentPage > 1 ? (currentPage - 1 ) : 1)}>
              prev
            </Link>
          </Button>
          {pages.map((page, i) => (
            <Button asChild key={i} variant={currentPage === i + 1 ? 'outline' : 'ghost'} className="mx-1">
              <Link key={i} href={createPageURL(page)}>
                {page}
              </Link>
            </Button>
          ))}
          <Button asChild variant="ghost" className="mx-1">
            <Link href={createPageURL(currentPage  < totalPages ? (currentPage + 1) : currentPage)}>
              next
            </Link>
          </Button>
        </div>
      }
    </>
  )
}