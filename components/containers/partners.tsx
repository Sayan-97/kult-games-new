import PartnersImg1 from "@/public/imgs/partners-1.png";
import PartnersImg2 from "@/public/imgs/partners-2.png";
import PartnersImg3 from "@/public/imgs/partners-3.png";
import PartnersImg4 from "@/public/imgs/partners-4.png";
import PartnersImg5 from "@/public/imgs/partners-5.png";
import PartnersImg6 from "@/public/imgs/partners-6.png";
import PartnersImg7 from "@/public/imgs/partners-7.png";
import PartnersImg8 from "@/public/imgs/partners-8.png";
import PartnersImg9 from "@/public/imgs/partners-9.png";
import PartnersImg10 from "@/public/imgs/partners-10.png";
import PartnersImg11 from "@/public/imgs/partners-11.png";
import PartnersImg12 from "@/public/imgs/partners-12.png";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-10 md:py-16">
      <div className="container space-y-12">
        <h2 className="text-center">Partners & Backers</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 place-items-center">
          <Image
            src={PartnersImg12}
            alt="img"
            width={110}
            height={68}
            draggable={false}
          />
          <Image
            src={PartnersImg11}
            alt="img"
            width={225.159}
            height={68.716}
            draggable={false}
          />
          
          <Image
            src={PartnersImg1}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg10}
            alt="img"
            width={220.159}
            height={68.716}
            draggable={false}
          />
          <Image
            src={PartnersImg3}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg4}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg5}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg6}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg2}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg7}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg8}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            draggable={false}
          />
          <Image
            src={PartnersImg9}
            alt="img"
            width={220.159}
            height={68.716}
            priority
            className="w-32 justify-self-center place-self-center"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
