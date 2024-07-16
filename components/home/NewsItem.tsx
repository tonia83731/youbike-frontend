import Image from "next/image";
import Link from "next/link";
export type NewsItemProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

const NewsItem = (props: NewsItemProps) => {
  const { image, title, description, href } = props;
  return (
    <Link href={href}>
      <div className="flex items-top gap-4 md:flex-col md:gap-0 md:h-full">
        <div className="w-1/4 md:w-full md:h-48 md:object-cover">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="md:w-full md:h-full"
          ></Image>
        </div>
        <div className="w-3/4 md:w-full md:h-full md:bg-light md:px-2 md:pt-4 md:pb-6 md:drop-shadow-md">
          <h4 className="font-bold text-xl text-dark mb-4 md:text-2xl md:truncate">
            {title}
          </h4>
          <p className="text-xs text-slate-500 description-lime-clamp md:text-base">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
