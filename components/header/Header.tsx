"use client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Select from "react-select";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdPedalBike } from "react-icons/md";
import Logo from "@/public/Logo.png";
import { twCity } from "@/datas/twCity";
import { useState } from "react";

const navlinks = [
  {
    id: "home",
    name: "首頁",
    href: "/",
  },
  {
    id: "realtime",
    name: "即時動態",
    href: "/realtime",
  },
  {
    id: "news",
    name: "最新消息",
    href: "/news",
  },
];

const Header = () => {
  //   const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);
  const pathname = usePathname();
  const cityOptions = twCity();
  return (
    <header className="bg-light drop-shadow-md h-[60px] md:h-[100px] px-3.5 py-2.5 w-4/5 fixed top-[30px] left-1/2 -translate-x-1/2 z-[999]">
      <div className="flex justify-between items-center h-full">
        <Link href="/">
          <Image
            src={Logo}
            alt="youbike logo"
            width={210}
            height={74}
            className="w-[105px] h-auto md:w-[160px]"
          ></Image>
        </Link>
        {isToggle && (
          <nav className="w-full fixed top-[80px] left-1/2 -translate-x-1/2 bg-green-light md:hidden">
            <div className="flex flex-col">
              {navlinks.map(({ id, name, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    href={href}
                    key={id}
                    className={`${
                      isActive ? "text-light bg-green-dark" : "text-green-dark"
                    } text-green-dark leading-8 px-4 py-2 hover:bg-green-normal`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
        <div className="md:flex md:gap-8 md:items-center">
          <nav className="hidden text-xl md:flex md:gap-4">
            {navlinks.map(({ id, name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  href={href}
                  key={id}
                  className={`text-green-dark font-medium hover:text-green-normal ${
                    isActive &&
                    "underline underline-offset-4 font-bold text-green-normal"
                  }`}
                >
                  <div className="flex gap-2 items-center">
                    {isActive && <MdPedalBike />}
                    <div>{name}</div>
                  </div>
                </Link>
              );
            })}
          </nav>
          <div className="flex gap-4 items-center">
            <Select
              options={cityOptions}
              isClearable={false}
              isSearchable={false}
              defaultValue={cityOptions[1]}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "none",
                  backgroundColor: "#C2E662",
                  "&:focus": {
                    outline: "none",
                  },
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#206A5D",
                }),
                indicatorSeparator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: "none",
                }),
                dropdownIndicator: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#206A5D",
                }),
                menu: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "#C2E662",
                }),
                menuList: (baseStyles, state) => ({
                  ...baseStyles,
                  "::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "::-webkit-scrollbar-thumb": {
                    backgroundColor: "#206A5D",
                    borderRadius: "4px",
                  },
                  "::-webkit-scrollbar-track": {
                    backgroundColor: "#C2E662",
                  },
                  // For Firefox
                  scrollbarWidth: "thin",
                  scrollbarColor: "#206A5D #C2E662",
                }),
                option: (styles) => ({
                  ...styles,
                  "&:hover": {
                    backgroundColor: "#58C4AF",
                  },
                }),
              }}
            />
            <button
              className="text-lg text-green-dark md:hidden"
              onClick={() => setIsToggle(!isToggle)}
            >
              {!isToggle ? <GiHamburgerMenu /> : <ImCross />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
