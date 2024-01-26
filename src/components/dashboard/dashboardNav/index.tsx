"use client";

import { useState } from 'react';
import { DashboardAvatar } from "@/components/ui/dashboard-avatar";
import { Logo } from "@/components/ui/logo";
import { Menu } from 'lucide-react';
import { DashboardMain } from '@/components/ui/dashboard-main';

const DashboardNav = () => {

  const [open, setOpen] = useState(false);

  return(
    <>
      <aside className="hidden w-60 z-90 top-0 h-full bg-[#fafafc] md:flex flex-col items-center relative">
        <div className="flex flex-col justify-between h-full">
          <div className="mt-9">
            <Logo />
            <div className="flex flex-col items-start mt-4">
              <DashboardMain />
            </div>
          </div>
          <DashboardAvatar />
        </div>
      </aside>
      <div className="fixed md:hidden full z-10 top-0 right-0 left-0 -mx-2 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <Menu className='h-4 w-4 cursor-pointer' onClick={() => setOpen(!open)} />
          {open &&
            <div className={`${open ? 'flex' : 'hidden'} absolute z-10 top-[60px] left-0 right-0 flex-col items-center py-8 w-full bg-white border-t-[1px] border-slate-100`}>
              <DashboardMain onClick={() => setOpen(false)} />
              <DashboardAvatar />
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
