import Link from "next/link";
import Image from "next/image";
const socialLink = [
  {
    id: "line",
    image: "/social/line.png",
    href: "https://page.line.me/122jqmcv?openQrModal=true",
  },
  {
    id: "youtube",
    image: "/social/youtube.png",
    href: "https://www.youtube.com/channel/UCXRTadM5Rgs_EXtdNREj9KQ?view_as=subscriber",
  },
  {
    id: "instagram",
    image: "/social/instagram.png",
    href: "https://www.instagram.com/youbike_tw/",
  },
  // different from area (change later)
  {
    id: "facebook",
    image: "/social/facebook.png",
    href: "https://www.facebook.com/YouBike.Taipei.tw/",
  },
];
const Footer = () => {
  return (
    <footer className="bg-green-light text-green-dark h-[90px] mt-auto">
      <div className="w-4/5 h-full mx-auto px-3.5 flex justify-between items-center">
        <Link
          href="/help-center"
          className="md:text-xl font-medium md:pr-4 md:border-r-2 md:border-green-dark"
        >
          聯絡我們
        </Link>
        <div className="flex gap-2">
          {socialLink.map(({ id, image, href }) => {
            return (
              <Link href={href} key={id}>
                <Image src={image} alt={id} width={40} height={40}></Image>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
