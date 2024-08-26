import { NextResponse } from "next/server";
import { client } from "@/lib/sanityClients";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startIndex = parseInt(searchParams.get("startIndex") || "0");
  const endIndex = parseInt(searchParams.get("endIndex") || "10");
  const newsData = await client.fetch(
    `*[_type == "news" && isPublished == true]| order(publishedAt desc)[${startIndex}...${endIndex}]{
            title,
            "description": short,
            "href": slug.current,
            "image": image.asset->url,
            "date": publishedAt,
          }`
  );
  const newsCount = await client.fetch(
    `count(*[
        _type == "news" && isPublished == true
      ])`
  );

  return NextResponse.json({ newsData, newsCount });
}
