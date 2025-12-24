"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { games } from "@/constants";
import Image from "next/image";
import Button from "../shared/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import GradImg from "@/public/imgs/our-games-grad.png";
import Link from "next/link";
import { MdMonitor } from "react-icons/md";
import ButtonSecondary from "../shared/button-secondary";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { AnimatedSection, fadeInLeft, fadeInRight } from "../shared/animations";

export default function OurGames() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(84, 22, 233, 0.15), transparent 80%)`
  );

  return (
    <section data-hearts data-no-flames className="relative py-10 md:py-16 overflow-hidden">
      <Image src={GradImg} alt="img" className="absolute left-0 -z-10" draggable={false} />
      <div className="container space-y-12">
        <AnimatedSection threshold={0.5}>
          <h2 className="font-ethnocentric">
            Experience our games
          </h2>
        </AnimatedSection>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <CarouselContent className="-ml-8">
            {games.map((item, index) => (
              <CarouselItem key={index} className="pl-8 w-full" onMouseMove={handleMouseMove}>
                <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8 relative group">
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ background: spotlightBackground }}
                  />
                  <AnimatedSection variant={fadeInLeft} threshold={0.3} className="md:w-2/3">
                    <Link href={item.link} target="_blank" className="relative h-[279px] md:h-[579px] rounded-3xl overflow-hidden block cursor-pointer hover:opacity-90 transition-opacity border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                      <Image
                        src={item.image}
                        alt="img"
                        fill
                        className="object-cover object-top"
                        draggable={false}
                        priority
                      />
                    </Link>
                  </AnimatedSection>
                  <AnimatedSection variant={fadeInRight} threshold={0.3} className="flex-grow flex flex-col gap-8">
                    <div className="relative max-md:h-[320px] bg-[#191934] flex-grow rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(217.24%_242.87%_at_217.75%_107.58%,rgba(127,139,210,0.30)0%,rgba(89,106,197,0.00)100%)] p-6 flex flex-col justify-between items-start">
                        <div className="space-y-2">
                          <p className="text-[27px] font-bold">{item.name}</p>
                          <p className="text-muted">{item.des}</p>
                          <Image src={item.plat} alt="alt" draggable={false} width={item.platWidth} height={item.platHeight} />
                        </div>
                        <div className="w-full flex items-center justify-between font-ethnocentric">
                          <Link href={item.link} target="_blank">
                            <Button>
                              <FaRegCirclePlay />
                              Play Game
                            </Button>
                          </Link>
                          <div className="flex items-center gap-2 md:hidden">
                            <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                              <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                                <MdMonitor />
                              </div>
                            </div>
                            <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                              <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                                <HiOutlineDevicePhoneMobile />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[166px] bg-[#191934] rounded-2xl max-md:hidden border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(383.94%_338.14%_at_213.36%_-151.22%,rgba(127,139,210,0.30)0%,rgba(89,106,197,0.00)100%)] p-6 flex flex-col justify-between">
                        <p className="text-[27px] font-bold">Platform</p>
                        <div className="flex items-center gap-4">
                          <ButtonSecondary>
                            <CiGlobe /> Web
                          </ButtonSecondary>
                          <ButtonSecondary>
                            <HiOutlineDevicePhoneMobile /> Mobile
                          </ButtonSecondary>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-[#191934] border-[#5F33D6] hover:bg-[#191934]/80" />
          <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-[#191934] border-[#5F33D6] hover:bg-[#191934]/80" />
        </Carousel>
      </div>
    </section>
  );
}
