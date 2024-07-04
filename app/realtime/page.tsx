import Image from "next/image";
import DistrictsCheckbox from "@/components/realtime/DistrictsCheckbox";
import StopSearch from "@/components/realtime/StopSearch";
import StopTable from "@/components/realtime/StopTable";

const Realtime = () => {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
        即時動態
      </h1>
      <div className="">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="flex flex-col gap-4">
            <div className="">
              <StopSearch />
            </div>
            <div className="bg-gray-50 w-full h-48">
              <Image
                src="/realtime/example-map.jpg"
                alt="realtime"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              ></Image>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/realtime/realtime.png"
              alt="realtime"
              width={750}
              height={260}
            ></Image>
          </div>
        </div>
        <StopTable />
      </div>
      {/* <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
        <div className="flex flex-col gap-4">
          <StopSearch />
          <DistrictsCheckbox />
        </div>
        <div className="hidden md:block">
          <Image
            src="/realtime/realtime.png"
            alt="realtime"
            width={750}
            height={260}
          ></Image>
        </div>
      </div> */}
    </main>
  );
};

export default Realtime;
