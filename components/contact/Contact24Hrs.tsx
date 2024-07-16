"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClients";
import { useCityStore } from "@/store/cityStore";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
type ContactsProps = {
  city: string;
  email: string;
  isPublished: boolean;
  phone: string;
  publishedAt: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
const Contact24Hrs = () => {
  const { selectedCity } = useCityStore();
  const [contacts, setContacts] = useState<ContactsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCenter = async () => {
      setIsLoading(true);
      const city = selectedCity.value;
      //   console.log(city);
      const contactData = await client.fetch(
        `*[_type == "contact" && isPublished == true && city == "${city}"]`
      );
      if (contactData.length > 0) setIsLoading(false);
      setContacts(contactData);
    };
    fetchCenter();
  }, [selectedCity]);
  // console.log(contacts);
  return (
    <div className="bg-yellow px-8 py-6 flex flex-col gap-8 text-lg md:text-xl justify-center">
      <div className="">
        如有任何服務使用上的問題與回饋，可撥打各地區服務電話告知我們，謝謝。
      </div>
      {isLoading ? (
        <ul className="flex flex-col gap-4">
          <li className="h-4 bg-green-dark-20"></li>
          <li className="h-4 bg-green-dark-20"></li>
        </ul>
      ) : (
        <ul className="">
          {contacts.map((contact) => (
            <li key={contact._id} className="flex flex-col gap-2">
              {contact.phone && (
                <div className="flex gap-2 items-center">
                  <FaPhoneVolume />
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-green-normal hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}
              {contact.email && (
                <div className="flex gap-2 items-center">
                  <MdEmail />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-green-normal hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contact24Hrs;
