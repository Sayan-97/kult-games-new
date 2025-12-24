"use client";

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
import Image, { StaticImageData } from "next/image";
import { AnimatedSection, fadeInUp, StaggeredContainer } from "../shared/animations";
import { motion } from "framer-motion";

const staggerItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const partners: { src: StaticImageData; width: number; height: number; className?: string }[] = [
  { src: PartnersImg12, width: 110, height: 68 },
  { src: PartnersImg11, width: 225.159, height: 68.716 },
  { src: PartnersImg1, width: 220.159, height: 68.716 },
  { src: PartnersImg10, width: 220.159, height: 68.716 },
  { src: PartnersImg3, width: 220.159, height: 68.716 },
  { src: PartnersImg4, width: 220.159, height: 68.716 },
  { src: PartnersImg5, width: 220.159, height: 68.716 },
  { src: PartnersImg6, width: 220.159, height: 68.716 },
  { src: PartnersImg2, width: 220.159, height: 68.716 },
  { src: PartnersImg7, width: 220.159, height: 68.716 },
  { src: PartnersImg8, width: 220.159, height: 68.716 },
  { src: PartnersImg9, width: 220.159, height: 68.716, className: "w-32 justify-self-center place-self-center" },
];

export default function Partners() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container space-y-12">
        <AnimatedSection variant={fadeInUp}>
          <h2 className="text-left font-ethnocentric">Partners & Backers</h2>
        </AnimatedSection>
        <StaggeredContainer className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 place-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="cursor-pointer"
            >
              <Image
                src={partner.src}
                alt="partner"
                width={partner.width}
                height={partner.height}
                priority={index < 5}
                draggable={false}
                className={partner.className || ""}
              />
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
