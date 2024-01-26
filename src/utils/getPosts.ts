export const getPosts = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, 
    {
      cache: "no-store",
    }
  );

  if(!res.ok) {
    throw new Error('Opsss...!');
  }

  return res.json();
}
