import Image from "next/image";

type PostCreatorProps = {
  image?: string;
  creator?: string;
  date?: string;
}

export const PostCreator = ({ image, creator, date }: PostCreatorProps) => {
  return(
    <div className="flex items-center mt-4">
      {image ? <Image src={image} alt={creator || image} width={32} height={32} className="rounded-full" /> : <div className="w-[32px] h-[32px] bg-zinc-300 rounded-full"></div>}
      <div className="mx-3 capitalize text-sm">{creator}</div>
      <div className="text-sm">{date}</div>
    </div>
  );
}