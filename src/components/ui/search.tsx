"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./input";
import { Search } from 'lucide-react';

type SearchBarProps = {
  className: string;
  placeholder: string;
}

export const SearchBar = ({ className, placeholder }: SearchBarProps) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if(term) {
      params.set('query', term);
      params.set('page', '1');
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return(
    <div className={`${className} h-[42px] relative mb-3`}>
      <Search className="absolute top-0 bottom-0 left-4 my-auto w-4 h-4" />
      <Input 
        onChange={(e) => handleSearch(e.target.value)} 
        type="text" 
        placeholder={placeholder}
        className="pl-10 pr-2" 
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div> 
  )
}  