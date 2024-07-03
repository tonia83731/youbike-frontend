import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import StepSection from "@/components/home/StepSection";
import PriceIntroSection from "@/components/home/PriceIntroSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <HeroSection />
      <NewsSection />
      <StepSection />
      <PriceIntroSection />
      <form className="flex items-center justify-center h-8 md:h-16 drop-shadow-md w-full md:w-2/4 mx-auto">
        <input
          type="email"
          className="h-full bg-light rounded-l-lg w-4/5 px-4 text-dark placeholder:text-slate-500"
          placeholder="請輸入Email..."
        />
        <button
          className="h-full bg-yellow text-green-dark px-6 rounded-r-lg w-1/5"
          type="submit"
        >
          訂閱
        </button>
      </form>
    </main>
  );
}
