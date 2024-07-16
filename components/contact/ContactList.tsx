"use client";

import ContactCard from "./ContactCard";
import ContactLoading from "../loading/ContactLoading";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClients";
import { useCityStore } from "@/store/cityStore";

export type ContactCardProps = {
  _id: string;
  address: string;
  imageUrl: string;
  name: string;
  working_hour: string;
  rest_hour: string;
};
const ContactList = () => {
  const { selectedCity } = useCityStore();
  const [centers, setCenters] = useState<ContactCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(selectedCity.value);
  useEffect(() => {
    const fetchCenter = async () => {
      setIsLoading(true);
      const city = selectedCity.value;
      const response = await client.fetch(
        `*[_type == "center" && isPublished == true && city == "${city}"] {
          _id, name, address, "imageUrl": image.asset->url, working_hour, rest_hour
        }`
      );
      if (response.length > 0) setIsLoading(false);
      setCenters(response);
    };
    fetchCenter();
  }, [selectedCity]);
  // console.log(centers);
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((data) => {
          return <ContactLoading key={data} />;
        })}
      </div>
    );
  }
  return (
    // flex flex-col gap-4 md:flex-row
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {centers.map((item) => {
        return <ContactCard {...item} key={item._id} />;
      })}
    </div>
  );
};

export default ContactList;
