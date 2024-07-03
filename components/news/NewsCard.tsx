import Image from "next/image";
import Link from "next/link";
import { NewsItemProps } from "../home/NewsItem";
export type NewsCardProps = NewsItemProps & { date: string };
const NewsCard = (props: NewsCardProps) => {
  const { image, title, description, href, date } = props;
  return (
    <Link href={href}>
      <div className="flex items-top gap-4 md:flex-col md:gap-0">
        <div className="w-1/4 md:w-full md:h-48 md:object-cover">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="md:w-full md:h-full rounded-md"
          ></Image>
        </div>
        <div className="w-3/4 md:w-full  md:px-2 md:pt-4 md:pb-6">
          <h4 className="font-bold text-xl text-dark mb-2 md:text-3xl hover:underline hover:underline-offset-2">
            {title}
          </h4>
          <p className="text-xs text-slate-500 description-lime-clamp-2 md:text-base my-2">
            {description}
          </p>
          <p className="text-xs text-slate-500 md:text-base">
            發布日期: {date}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default NewsCard;