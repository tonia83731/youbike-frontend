"use client";

import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClients";
import { useCityStore } from "@/store/cityStore";
const dummyStation = [
  {
    id: "station-taipei-1",
    title: "捷運劍南路服務中心(2號出口2F/需出站)",
    image: "https://picsum.photos/400/300",
    location: "臺北市中山區北安路798號",
    work_time: "服務時間：10:00－19:00(一、五公休)",
    rest_time: "休息時間：14:00－15:00，視現場狀況微調時間。",
  },
  {
    id: "station-taipei-1",
    title: "捷運劍南路服務中心(2號出口2F/需出站)",
    image: "https://picsum.photos/400/300",
    location: "臺北市中山區北安路798號",
    work_time: "服務時間：10:00－19:00(一、五公休)",
    rest_time: "休息時間：14:00－15:00，視現場狀況微調時間。",
  },
  {
    id: "station-taipei-1",
    title: "捷運劍南路服務中心(2號出口2F/需出站)",
    image: "https://picsum.photos/400/300",
    location: "臺北市中山區北安路798號",
    work_time: "服務時間：10:00－19:00(一、五公休)",
    rest_time: "休息時間：14:00－15:00，視現場狀況微調時間。",
  },
];
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
  // console.log(selectedCity.value);
  useEffect(() => {
    const fetchCenter = async () => {
      const city = selectedCity.value;
      const response = await client.fetch(
        `*[_type == "center" && isPublished == true && city == "${city}"] {
          _id, name, address, "imageUrl": image.asset->url, working_hour, rest_hour
        }`
      );
      setCenters(response);
    };
    fetchCenter();
  }, [selectedCity]);
  console.log(centers);
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
