export const getPosts = async () => {
  const res = await fetch('http://localhost:3000/api/posts', 
    {
      cache: "no-store",
    }
  );

  if(!res.ok) {
    throw new Error('Opsss...!');
  }

  return res.json();
}
