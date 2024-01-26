type HeadingProps = {
  title: string;
  dataLength?: number;
  subTitle?: string;
}

const Heading = ({ title, dataLength, subTitle }: HeadingProps) => {
  return(
    <div className="flex flex-col">
      <h2 className="mb-4 text-3xl font-semibold">{title}{dataLength && <span>({dataLength})</span>}</h2>
      {subTitle && <h4 className="text-base">{subTitle}</h4>}
    </div>
  );
}

export default Heading;