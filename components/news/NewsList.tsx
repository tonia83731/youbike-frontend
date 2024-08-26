"use client";

import NewsCard from "./NewsCard";
import NewsLoading from "../loading/NewsLoading";
import { NewsCardProps } from "./NewsCard";
import { client } from "@/lib/sanityClients";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
const NewsList = () => {
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [visibleCount, setVisibleCount] = useState(6);
  const [newsCount, setNewsCount] = useState<number>(0);
  const [itemPerPage, setItemPerPage] = useState<number>(12);
  const [currPage, setCurrPage] = useState<number>(1);
  const pageLength = Math.ceil(newsCount / itemPerPage);
  const pagesArr = new Array(pageLength).fill(0).map((_, index) => index + 1);
  const startIndex = (currPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const handleNumClick = (page: number) => {
    if (page === currPage) return;
    setCurrPage(page);
  };
  const handleArrowClick = (btn: string) => {
    if (btn === "prev" && currPage !== 1) setCurrPage(currPage - 1);
    if (btn === "next" && currPage !== pageLength) setCurrPage(currPage + 1);
  };
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const NewsData = await client.fetch(
        `*[_type == "news" && isPublished == true]| order(publishedAt desc)[${startIndex}...${endIndex}]{
            title,
            "description": short,
            "href": slug.current,
            "image": image.asset->url,
            "date": publishedAt,
          }`
      );
      if (NewsData.length > 0) setIsLoading(false);
      setAllNews(NewsData);
      // if (NewsData.length < visibleCount) {
      //   setHasMore(false);
      // }
    };
    const fetchNewsCount = async () => {
      const count = await client.fetch(`count(*[
        _type == "news" && isPublished == true
      ])`);
      setNewsCount(count);
    };
    fetchNews();
    fetchNewsCount();
  }, [currPage, startIndex, endIndex]);
  //   console.log(allNews);
  if (isLoading) {
    return (
      <div>
        <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
          最新消息
        </h1>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((data) => {
            return (
              <>
                <NewsLoading key={data} />
              </>
            );
          })}
        </div>
      </div>
    );
  }
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
        {/* <button
          onClick={loadMoreNews}
          disabled={!hasMore}
          className="bg-green-dark text-light px-8 py-2 rounded-md w-fit disabled:bg-slate-300"
        >
          更多消息
        </button> */}
        <Pagination
          pages={pagesArr}
          pageLength={pageLength}
          currPage={currPage}
          onNumClick={handleNumClick}
          onArrowClick={handleArrowClick}
        />
      </div>
    </>
  );
};
export default NewsList;
