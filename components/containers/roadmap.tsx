"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, TargetAndTransition } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { roadmap } from "@/constants";
import { AnimatedSection, fadeInUp, StaggeredContainer, staggerItem } from "../shared/animations";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: "easeOut" } }
};

export default function Roadmap() {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { amount: 0.3, once: false });
  const direction = useScrollDirection();
  const [lineHasAnimated, setLineHasAnimated] = useState(false);

  useEffect(() => {
    if (isLineInView && direction === "down") {
      setLineHasAnimated(true);
    } else if (!isLineInView && direction === "up") {
      setLineHasAnimated(false);
    }
  }, [isLineInView, direction]);

  const lineIsVisible = lineHasAnimated || isLineInView;
  const isScrollingUp = direction === "up";

  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container space-y-12">
        <AnimatedSection variant={fadeInUp}>
          <h2 className="font-ethnocentric">Roadmap</h2>
        </AnimatedSection>
        <Carousel opts={{ dragFree: true }} className="mt-10">
          <motion.div
            ref={lineRef}
            className="w-full h-1 bg-[linear-gradient(90deg,#FFE0FC_2.92%,#E064F7_11.58%,#8C16E9_44.58%)] absolute top-24 origin-left"
            initial="hidden"
            animate={lineIsVisible ? "visible" : "hidden"}
            variants={{
              ...lineGrow,
              visible: {
                ...lineGrow.visible,
                transition: {
                  ...(lineGrow.visible as TargetAndTransition)?.transition,
                  ...(isScrollingUp ? { duration: 0, delay: 0 } : {})
                }
              }
            }}
          />
          <StaggeredContainer className="mt-16">
            <CarouselContent className="-ml-8 pt-12">
              {roadmap.map((item, index) => (
                <CarouselItem key={index} className="pl-8 md:basis-1/4 select-none">
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative bg-[linear-gradient(18deg,rgba(48,42,42,0.12)0%,rgba(185,185,185,0.12)100%)] h-[377px] rounded-b-2xl backdrop-blur-[25px] hover:bg-[linear-gradient(18deg,rgba(48,42,42,0.20)0%,rgba(185,185,185,0.20)100%)] transition-colors">
                      <div className="relative flex items-center justify-center -top-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="106"
                          height="92"
                          viewBox="0 0 106 92"
                          fill="none"
                        >
                          <path
                            d="M27.024 1.32612L78.5215 1.32612L104.27 45.9243L78.5215 90.5224L27.024 90.5224L1.27526 45.9243L27.024 1.32612Z"
                            fill="black"
                            stroke="url(#paint0_linear_84_599)"
                            strokeWidth="2"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_84_599"
                              x1="0.705103"
                              y1="54.9402"
                              x2="38.7438"
                              y2="33.0152"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFE0FC" />
                              <stop offset="0.207908" stopColor="#E064F7" />
                              <stop offset="1" stopColor="#8C16E9" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFE0FC_2.92%,#E064F7_11.58%,#8C16E9_44.58%)]">
                            {item.step}
                          </p>
                          <p className="text-lg text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFE0FC_2.92%,#E064F7_11.58%,#8C16E9_44.58%)]">
                            {item.year}
                          </p>
                        </div>
                      </div>
                      <ul className="ml-4 p-4 space-y-2 list-disc -mt-8">
                        {item.lists.map((list, listIndex) => (
                          <li key={listIndex} className="text-base">
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </StaggeredContainer>
        </Carousel>
      </div>
    </section>
  );
}
