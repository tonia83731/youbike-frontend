import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const BodyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <div className="w-4/5 mx-auto py-[30px]">
        <Header />
        <div className="flex flex-col gap-8 my-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default BodyLayout;
