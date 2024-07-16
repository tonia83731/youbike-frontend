"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClients";
import NewsItem from "./NewsItem";
import { NewsItemProps } from "./NewsItem";
import NewsLoading from "../loading/NewsLoading";
const NewsSection = () => {
  const [topNews, setTopNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTopNews = async () => {
      setIsLoading(true);
      const topNewsData = await client.fetch(
        `*[_type == "news" && isPublished == true && isWeight == true]| order(weight desc, publishedAt desc)[0..3]{
            title,
            "description": short,
            "href": slug.current,
            "image": image.asset->url,
          }`
      );
      if (topNewsData.length > 0) setIsLoading(false);
      setTopNews(topNewsData);
    };
    fetchTopNews();
  }, []);
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        {[1, 2, 3].map((data) => {
          return <NewsLoading key={data} />;
        })}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
      {topNews.map((item: NewsItemProps) => {
        return <NewsItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default NewsSection;
