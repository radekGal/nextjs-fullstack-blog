"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if(status === 'authenticated') {
      router.push('/')
    }
  });

  if(status === 'loading') {
    return <div>Loading...</div>
  }

  return(
    <div>
      <div onClick={() => signIn('google')}>Sign in with Google</div>
    </div>
  )
}

export default LoginPage;