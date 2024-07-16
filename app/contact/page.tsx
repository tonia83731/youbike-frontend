import Image from "next/image";
import ContactList from "@/components/contact/ContactList";
import Contact24Hrs from "@/components/contact/Contact24Hrs";
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
        <ContactList />
      </div>
      <div className="">
        <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">
          非常感謝您與我們聯絡
        </h1>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <Image
            src="/contact/feedback.png"
            alt="feedback"
            width={600}
            height={415}
            className="hidden md:block md:w-full md:h-full md:object-cover"
          ></Image>
          <Contact24Hrs />
        </div>
      </div>
    </main>
  );
};

export default Contact;
