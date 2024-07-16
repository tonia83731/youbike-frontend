"use client";

import NewsCard from "./NewsCard";
import { NewsCardProps } from "./NewsCard";
import { client } from "@/lib/sanityClients";
import { useEffect, useState } from "react";
const NewsList = () => {
  const [allNews, setAllNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreNews = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  useEffect(() => {
    const fetchNews = async () => {
      const NewsData = await client.fetch(
        `*[_type == "news" && isPublished == true]| order(publishedAt desc)[0...${visibleCount}]{
            title,
            "description": short,
            "href": slug.current,
            "image": image.asset->url,
            "date": publishedAt,
          }`
      );
      setAllNews(NewsData);
      if (NewsData.length < visibleCount) {
        setHasMore(false);
      }
    };
    fetchNews();
  }, [visibleCount]);
  //   console.log(allNews);
  return (
    <>
      <div className="">
        <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
          最新消息
        </h1>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {allNews.map((item: NewsCardProps) => {
            return (
              <>
                <NewsCard {...item} key={item.title} />
              </>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={loadMoreNews}
          disabled={!hasMore}
          className="bg-green-dark text-light px-8 py-2 rounded-md w-fit disabled:bg-slate-300"
        >
          更多消息
        </button>
      </div>
    </>
  );
};
export default NewsList;
