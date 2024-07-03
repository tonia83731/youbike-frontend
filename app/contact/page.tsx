import Image from "next/image";
import ContactCard from "@/components/contact/ContactCard";
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
const Contact = () => {
  return (
    <main className="flex flex-col gap-8">
      <div className="h-[200px] md:h-[300px] relative md:hidden">
        <Image
          src="/contact/contact_hero.png"
          alt="contact-hero"
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-center"
        ></Image>
        <div className="w-full h-[60px] flex items-center px-6 bg-light-40 text-light absolute bottom-0 left-0">
          <h1 className="font-bold text-2xl">服務中心</h1>
        </div>
      </div>
      <div className="">
        <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
          服務中心
        </h1>
        <div className="flex flex-col gap-4 md:flex-row">
          {dummyStation.map((item) => {
            return <ContactCard {...item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="">
        <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
          意見回饋
        </h1>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <Image
            src="/contact/feedback.png"
            alt="feedback"
            width={600}
            height={415}
            className="hidden md:block md:w-full md:h-full md:object-cover"
          ></Image>
          <div className="bg-yellow px-8 py-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="feedback-name" className="text-dark font-medium">
                姓名
              </label>
              <input
                type="text"
                id="feedback-name"
                className="bg-light-40 h-8 leading-8 rounded-md px-4 placeholder:text-green-dark-40"
                placeholder="請留下姓名"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="feedback-email" className="text-dark font-medium">
                Email
              </label>
              <input
                type="email"
                id="feedback-email"
                className="bg-light-40 h-8 leading-8 rounded-md px-4 placeholder:text-green-dark-40"
                placeholder="請留下Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="feedback-textarea"
                className="text-dark font-medium"
              >
                建議
              </label>
              <textarea
                name=""
                id="feedback-textarea"
                className="resize-none bg-light-40 rounded-md p-4 placeholder:text-green-dark-40"
                rows={4}
                cols={50}
                placeholder="請留下寶貴建議"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
