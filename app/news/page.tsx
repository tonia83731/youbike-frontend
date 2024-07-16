import Image from "next/image";
import NewsList from "@/components/news/NewsList";

export default function News() {
  return (
    <main className="flex flex-col gap-8">
      <div className="h-[200px] md:h-[300px] relative">
        <Image
          src="/news/news_hero.jpg"
          alt="news-hero"
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-center"
        ></Image>
        <div className="w-full h-[60px] flex items-center px-6 bg-light-40 text-light absolute bottom-0 left-0 md:hidden">
          <h1 className="font-bold text-2xl">最新消息</h1>
        </div>
      </div>
      <NewsList />
    </main>
  );
}
