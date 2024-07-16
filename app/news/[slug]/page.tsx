"use client";

import { client } from "@/lib/sanityClients";
import {
  PortableText,
  PortableTextMarkComponent,
  PortableTextTypeComponent,
} from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import Image from "next/image";
type DetailPageProps = {
  title: string;
  body: any;
  duration: {
    start: string;
    end: string;
  };
  isActivity: boolean | null;
  publishedAt: string;
};
const NewsDetailPage = ({ params }: { params: { slug: string } }) => {
  const builder = imageUrlBuilder(client);
  const [slugData, setSlugData] = useState<DetailPageProps>({
    title: "",
    body: null,
    duration: {
      start: "",
      end: "",
    },
    isActivity: null,
    publishedAt: "",
  });

  const types: Record<string, PortableTextTypeComponent | undefined> = {
    youtube: ({ value }) => {
      try {
        const { url } = value;
        const id = new URL(url).searchParams.get("v");
        return (
          <div className="flex justify-center max-w-[760px] h-60 md:h-96 lg:h-[480px] mx-auto my-8">
            <iframe
              width={560}
              height={315}
              src={`https://www.youtube.com/embed/${id}`}
              allow="encrypted-media;"
              allowFullScreen
              title={`Youtube影片${id}`}
              className="w-full h-full"
            />
          </div>
        );
      } catch {
        return null;
      }
    },
    image: ({ value }) => {
      try {
        const image = builder.image(value);
        const url = image.url();
        return (
          <div className="flex justify-center max-w-[760px] h-60 md:h-96 lg:h-[480px] mx-auto my-8">
            <Image
              alt=""
              width={1000}
              height={800}
              src={url}
              className="w-full h-full object-cover object-center"
            />
          </div>
        );
      } catch {
        return null;
      }
    },
    button: ({ value }) => {
      try {
        const { label, url } = value;
        return (
          <a className="mt-6 inline-block" href={url} target="_blank">
            <button className="rounded-lg py-2.5 px-6 leading-5 font-medium min-w-36 bg-blue-1 text-white cursor-pointer hover:bg-transparent  hover:border  hover:border-blue-1  hover:text-blue-1">
              {label}
            </button>
          </a>
        );
      } catch {
        return null;
      }
    },
  };
  const marks: Record<string, PortableTextMarkComponent<any> | undefined> = {
    textColor: ({ children, value }) => (
      <span style={{ color: value.value }}>{children}</span>
    ),
    highlightColor: ({ children, value }) => (
      <span style={{ background: value.value }}>{children}</span>
    ),
    externalLink: ({ value, children }) => {
      const { blank, href } = value;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { slug } = params;
        const news = await client.fetch(
          `*[_type == "news" && slug.current == '${slug}' && isPublished == true]{
                    title,
                    body,
                    duration,
                    isActivity,
                    publishedAt,
                }`
        );
        console.log(news);
        const { title, body, duration, isActivity, publishedAt } = news[0];
        const durationTime = duration
          ? {
              start: dayjs(duration.start).format("YYYY-MM-DD HH:mm:ss"),
              end: dayjs(duration.end).format("YYYY-MM-DD HH:mm:ss"),
            }
          : {
              start: "",
              end: "",
            };
        setSlugData({
          title,
          body,
          duration: durationTime,
          isActivity,
          publishedAt: dayjs(publishedAt).format("YYYY-MM-DD"),
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className="flex flex-col gap-8">
      <h1 className="font-bold text-3xl text-dark mb-4">{slugData.title}</h1>
      <div className="text-green-dark md:text-lg">
        <div className="flex gap-2 items-center">
          <div className="text-xl">
            <MdOutlinePublishedWithChanges />
          </div>
          <div className="flex gap-1 items-center">
            <span className="hidden md:block">發布時間:</span>
            <span>{slugData.publishedAt}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-xl">
            <MdEvent />
          </div>
          <div className="flex gap-1 items-center">
            <span className="hidden md:block">活動時間:</span>
            <span>
              {slugData.duration.start} ~ {slugData.duration.end}
            </span>
            {slugData.isActivity && (
              <span className="bg-yellow text-green-dark px-2 rounded-md">
                活動
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className="
                        mt-8
                        mb-24
                        md:mb-0
                        text-sm
                        sm:text-[18px]
                        leading-[30px]
                        sm:flex-1
                        [&_h1]:mt-[30px]
                        [&_h1]:mb-[8px]
                        [&_h1]:font-bold
                        [&_h1]:text-4xl
                        [&_h2]:mt-[20px]
                        [&_h2]:mb-[8px]
                        [&_h2]:font-bold
                        [&_h2]:text-3xl
                        [&_h3]:mt-[10px]
                        [&_h3]:mb-[8px]
                        [&_h3]:font-bold
                        [&_h3]:text-2xl
                        [&_h4]:mt-[10px]
                        [&_h4]:mb-[8px]
                        [&_h4]:font-bold
                        [&_h4]:text-xl
                        [&_h5]:mt-[10px]
                        [&_h5]:mb-[8px]
                        [&_h5]:font-bold
                        [&_h5]:text-lg
                        [&>ol]:ml-[30px]
                        [&>ol]:bold
                        [&>ol]:list-decimal
                        [&_ul]:ml-[30px]
                        [&_ul]:list-disc
                        [&_a]:underline
                        [&_a]:underline-offset-2
                        [&_a]:font-bold
                        [&_p]:mb-6
                        max-w-full
                        break-words
                        "
      >
        <PortableText value={slugData.body} components={{ types, marks }} />
      </div>
    </main>
  );
};

export default NewsDetailPage;
