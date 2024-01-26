"use client"

import { Logo } from "./logo";
import { useState } from "react";
import { Menu } from "lucide-react";
import { MainNav } from "./main-nav";
import { AuthNav } from "./auth-nav";

export const NavBar = () => {
  
  const [open, setOpen] = useState(false);
 
  return(
    <div className="w-full bg-white fixed py-3 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="py-4 space-x-6 justify-end items-center hidden sm:flex">
          <MainNav />
          <AuthNav />
        </nav>
        <div className="sm:hidden">
          <Menu className="h-4 w-4 cursor-pointer" onClick={() => setOpen(!open)} />
          {open 
            && 
            <div className={`${open ? 'flex' : 'hidden'} absolute z-10 top-[60px] left-0 right-0 flex-col items-center py-8 w-full bg-white border-t-[1px] border-slate-100`}>
              <MainNav onClick={() => setOpen(false)} />
              <AuthNav onClick={() => setOpen(false)} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}