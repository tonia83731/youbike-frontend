import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/home/Hero.png"
        alt="hero"
        width={560}
        height={324}
        className="w-full md:hidden"
      ></Image>
      <Image
        src="/home/Hero_Desktop.png"
        alt="hero"
        width={2400}
        height={1400}
        className="w-full hidden md:block"
      ></Image>
    </div>
  );
};

export default HeroSection;
