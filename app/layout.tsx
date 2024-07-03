import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BodyLayout from "@/components/layout/BodyLayout";

const notosans = Noto_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Youbike微笑單車",
  description: "城市微笑．單車開心",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${notosans.className} max-w-[1280px] mx-auto min-h-screen flex flex-col`}
      >
        <div className="w-4/5 mx-auto py-[30px]">
          <Header />
          <div className="flex flex-col gap-8 mt-[90px] md:mt-[130px] mb-4">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
