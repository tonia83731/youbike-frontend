import Image from "next/image";
import NewsCard from "@/components/news/NewsCard";
import { NewsCardProps } from "@/components/news/NewsCard";
const dummyNewsCard: NewsCardProps[] = [
  {
    image: "https://picsum.photos/seed/picsum/300/300",
    title: "山地自行車",
    description:
      "這款山地自行車設計用於崎嶇不平的路面，具有強大的避震和耐用的輪胎。它特別適合喜歡挑戰自然地形的騎行者，能夠穩定地應對不同的地形和路面條件。搭載先進的懸吊系統和耐磨的胎面，提供了極佳的舒適性和可靠性。無論是攀登陡峭的山路還是越野探險，這款自行車都能給予你無比的信心和樂趣。",
    href: "/news/mountain-bike",
    date: "2024/07/02",
  },
  {
    image: "https://picsum.photos/seed/picsum/300/300",
    title: "公路自行車",
    description:
      "這款公路自行車適合快速騎行，具有輕量框架和高效能的齒輪系統。無論是日常通勤還是長途旅行，它都能提供順暢的騎行體驗和出色的加速性能。設計上注重風阻減少和舒適性，讓你能夠以最佳狀態保持速度。優雅的外觀配上先進的技術，使它成為尋求速度和效能的騎行者的理想選擇。",
    href: "/news/road-bike",
    date: "2024/07/02",
  },
  {
    image: "https://picsum.photos/seed/picsum/300/300",
    title: "折疊自行車",
    description:
      "這款折疊自行車便於攜帶和存放，非常適合城市通勤。它輕便而堅固，可以快速折疊成小尺寸，便於在公共交通工具或辦公室內存放。儘管如此，它仍然具有出色的騎行表現和舒適的駕駛體驗。適合那些需要在城市中來回移動，並希望擁有一輛方便攜帶的高品質自行車的騎行者選擇。",
    href: "/news/folding-bike",
    date: "2024/07/02",
  },
  {
    image: "https://picsum.photos/seed/picsum/300/300",
    title: "山地自行車",
    description:
      "這款山地自行車設計用於崎嶇不平的路面，具有強大的避震和耐用的輪胎。它特別適合喜歡挑戰自然地形的騎行者，能夠穩定地應對不同的地形和路面條件。搭載先進的懸吊系統和耐磨的胎面，提供了極佳的舒適性和可靠性。無論是攀登陡峭的山路還是越野探險，這款自行車都能給予你無比的信心和樂趣。",
    href: "/news/mountain-bike",
    date: "2024/07/02",
  },
  {
    image: "https://picsum.photos/seed/picsum/300/300",
    title: "公路自行車",
    description:
      "這款公路自行車適合快速騎行，具有輕量框架和高效能的齒輪系統。無論是日常通勤還是長途旅行，它都能提供順暢的騎行體驗和出色的加速性能。設計上注重風阻減少和舒適性，讓你能夠以最佳狀態保持速度。優雅的外觀配上先進的技術，使它成為尋求速度和效能的騎行者的理想選擇。",
    href: "/news/road-bike",
    date: "2024/07/02",
  },
  {
    image: "https://picsum.photos/seed/picsum/300/300",
    title: "折疊自行車",
    description:
      "這款折疊自行車便於攜帶和存放，非常適合城市通勤。它輕便而堅固，可以快速折疊成小尺寸，便於在公共交通工具或辦公室內存放。儘管如此，它仍然具有出色的騎行表現和舒適的駕駛體驗。適合那些需要在城市中來回移動，並希望擁有一輛方便攜帶的高品質自行車的騎行者選擇。",
    href: "/news/folding-bike",
    date: "2024/07/02",
  },
];
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
      <div className="">
        <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
          最新消息
        </h1>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {dummyNewsCard.map((item) => {
            return <NewsCard {...item} key={item.title} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-green-dark text-light px-8 py-2 rounded-md w-fit">
          更多消息
        </button>
      </div>
    </main>
  );
}
