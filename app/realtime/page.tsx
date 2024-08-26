"use client";
import Image from "next/image";
import {
  mergeRealtimeData,
  mergeRealtimeTableData,
  stationInfo,
  capacityInfo,
} from "@/helpers/realtimeHelpers";
import { useState } from "react";
import { useCityStore } from "@/store/cityStore";
import StopTable from "@/components/realtime/StopTable";
import StopMap from "@/components/realtime/StopMap";
const Realtime = () => {
  const tableData = mergeRealtimeTableData(stationInfo, capacityInfo);
  return (
    <main className="flex flex-col gap-8">
      <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
        即時動態
      </h1>
      <div className="">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="w-full h-[250px]">
            <StopMap />
          </div>
          <Image
            src="/realtime/realtime.png"
            alt="realtime"
            width={750}
            height={260}
            className="hidden lg:block"
          ></Image>
        </div>
        <StopTable tableData={tableData} />
      </div>
    </main>
  );
};

export default Realtime;
