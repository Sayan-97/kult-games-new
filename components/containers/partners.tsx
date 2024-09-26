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
import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-10 lg:py-16">
      <div className="container space-y-12">
        <h2 className="text-center">Partners & Backers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8">
          <Image
            src={PartnersImg1}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg10}
            alt="img"
            width={220.159}
            height={68.716}
          />
          <Image
            src={PartnersImg3}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg4}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg5}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg6}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg2}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg7}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg8}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
          <Image
            src={PartnersImg9}
            alt="img"
            width={220.159}
            height={68.716}
            priority
          />
        </div>
      </div>
    </section>
  );
}
