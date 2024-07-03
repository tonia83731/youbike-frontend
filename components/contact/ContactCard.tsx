import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export type ContactCardProps = {
  id: string;
  image: string;
  title: string;
  location: string;
  work_time: string;
  rest_time: string;
};

const ContactCard = (props: ContactCardProps) => {
  const { id, image, title, location, work_time, rest_time } = props;
  return (
    <div className="">
      <div className="hidden md:block md:w-full md:h-48">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="md:object-cover h-full w-full"
        ></Image>
      </div>
      <div className="w-full bg-light p-4 md:px-2 drop-shadow-md">
        <h4 className="font-bold text-xl text-dark mb-4 md:text-2xl">
          {title}
        </h4>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="text-dark">
              <FaLocationDot />
            </div>
            <p className="text-xs text-slate-500 description-lime-clamp md:text-base">
              {location}
            </p>
          </div>
          <div className="flex gap-4">
            <div className="">
              <FaClock />
            </div>
            <ul className="text-xs text-slate-500 md:text-base ">
              <li>{work_time}</li>
              <li>{rest_time}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
