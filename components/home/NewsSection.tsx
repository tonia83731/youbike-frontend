"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClients";
import NewsItem from "./NewsItem";
import { NewsItemProps } from "./NewsItem";

const NewsSection = () => {
  const [topNews, setTopNews] = useState([]);
  useEffect(() => {
    const fetchTopNews = async () => {
      const topNewsData = await client.fetch(
        `*[_type == "news" && isPublished == true && isWeight == true]| order(weight desc, publishedAt desc)[0..3]{
            title,
            "description": short,
            "href": slug.current,
            "image": image.asset->url,
          }`
      );
      setTopNews(topNewsData);
    };
    fetchTopNews();
  }, []);
  // console.log(topNews);
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
      {topNews.map((item: NewsItemProps) => {
        return <NewsItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default NewsSection;
