import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { ContactCardProps } from "./ContactList";

const ContactCard = (props: ContactCardProps) => {
  const { _id, address, imageUrl, name, working_hour, rest_hour } = props;

  return (
    <div className="">
      <div className="hidden md:block md:w-full md:h-48">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={225}
          className="md:object-cover h-full w-full"
        ></Image>
      </div>
      <div className="w-full bg-light p-4 md:px-2 drop-shadow-md md:h-52">
        <h4 className="font-bold text-xl text-dark mb-4 md:text-2xl md:min-h-16">
          {name}
        </h4>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <div className="text-dark text-lg">
              <FaLocationDot />
            </div>
            <p className="text-xs text-slate-500 description-lime-clamp">
              {address}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-dark text-lg">
              <FaClock />
            </div>
            <ul className="text-xs text-slate-500">
              <li>服務時間:{working_hour}</li>
              <li>休息時間: {rest_hour}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
