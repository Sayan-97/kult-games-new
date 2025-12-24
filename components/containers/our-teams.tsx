"use client";

import { motion } from "framer-motion";
import Team1 from "@/public/imgs/team1.png";
import Team2 from "@/public/imgs/team2.png";
import Team3 from "@/public/imgs/team3.png";
import Team5 from "@/public/imgs/team5.png";
import Team6 from "@/public/imgs/team6.png";
import Team7 from "@/public/imgs/team7.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { AnimatedSection, StaggeredContainer, staggerItem } from "../shared/animations";

export default function OurTeams() {
  const teams = [
    {
      img: Team1,
      name: "KARN CHAKERVERTY",
      des: "CEO",
    },
    {
      img: Team3,
      name: "Sidhant Mahato",
      des: "Project Lead",
    },
    {
      img: Team2,
      name: "Avi Saini",
      des: "Blockchain Expert",
    },
    {
      img: Team5,
      name: "Martin Trinh",
      des: "Community Lead",
    },
    {
      img: Team6,
      name: "Raunak Jha",
      des: "Brand Advocate",
    },
    {
      img: Team7,
      name: "Sambhav",
      des: "Full Stack Developer",
    },
  ];

  return (
    <section id="team" className="container space-y-10 py-10 md:py-16 overflow-hidden">
      <AnimatedSection className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-ethnocentric">Our Team</h2>
      </AnimatedSection>
      <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-44 md:gap-y-52 lg:gap-y-64 pt-32 md:pt-40 lg:pt-44">
        {teams.map((item, index) => (
          <motion.div key={index} variants={staggerItem}>
            <CardContainer className="w-full">
              <CardBody className="w-full h-auto">
                <div
                  className="relative p-3 pt-24 md:p-6 md:pt-24 lg:p-8 lg:pt-28 rounded-[30px] flex flex-col items-center space-y-3 md:space-y-4 border border-[#8C16E9] hover:border-[#BBA5F4] transition-colors"
                  style={{
                    background:
                      "radial-gradient(172.27% 145.85% at -4.55% -1.7%, rgba(89, 106, 197, 0.30) 0%, rgba(89, 106, 197, 0.00) 100%), #191934",
                  }}
                >
                  <CardItem translateZ="50" className="absolute bottom-12 md:bottom-14">
                    <Image src={item.img} alt="img" priority draggable={false} />
                  </CardItem>
                  <CardItem translateZ="50">
                    <h5 className="text-xl md:text-2xl uppercase text-center">{item.name}</h5>
                  </CardItem>
                  <CardItem translateZ="50">
                    <p className="text-base md:text-lg text-muted uppercase">{item.des}</p>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </StaggeredContainer>
    </section>
  );
}
