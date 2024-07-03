import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const stepData = [
  {
    id: "step1",
    name: "註冊/登入",
    image: "/home/step-01.png",
  },
  {
    id: "step2",
    name: "租借",
    image: "/home/step-02.png",
  },
  {
    id: "step3",
    name: "騎乘",
    image: "/home/step-03.png",
  },
  {
    id: "step4",
    name: "還車",
    image: "/home/step-04.png",
  },
];

const StepSection = () => {
  return (
    <div className="bg-light drop-shadow-md p-6">
      <h4 className="font-bold text-2xl mb-4 text-dark">使用方式</h4>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:justify-between items-center">
        {stepData.map(({ id, name, image }, index) => {
          return (
            <>
              <div
                className="flex flex-col gap-2 justify-center items-center"
                key={id}
              >
                <Image
                  src={image}
                  width={300}
                  height={300}
                  alt={name}
                  className="w-28 h-28"
                ></Image>
                <h4 className="font-bold text-dark">
                  <span className="md:hidden">{index + 1}.</span>
                  {name}
                </h4>
              </div>
              {index < 3 && (
                <div className="hidden md:block text-green-dark text-2xl">
                  <FaArrowRight />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default StepSection;
