"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { roadmap } from "@/constants";
import { AnimatedSection, fadeInUp, StaggeredContainer, staggerItem } from "../shared/animations";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cardBorderAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (index: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeOut", delay: 0.3 + index * 0.2 },
      opacity: { duration: 0.3, delay: 0.3 + index * 0.2 }
    }
  })
};

const MAX_VISIBLE_ITEMS = 4;

export default function Roadmap() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const shouldAnimate = isInView;

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    // Jump to last slide (rightmost) on mount with no animation
    api.scrollTo(roadmap.length - 1, true);
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section ref={sectionRef} className="py-10 md:py-16 overflow-hidden">
      <div className="container space-y-12">
        {/* Header row with nav buttons */}
        <div className="flex items-center justify-between">
          <AnimatedSection variant={fadeInUp}>
            <h2 className="font-ethnocentric">Roadmap</h2>
          </AnimatedSection>
          <div className="flex items-center gap-3">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#191934] border border-[#5F33D6] hover:bg-[#5F33D6]/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#191934] border border-[#5F33D6] hover:bg-[#5F33D6]/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ dragFree: true, align: "start" }}
          className="mt-10"
        >
          <StaggeredContainer className="mt-16">
            <CarouselContent className="-ml-8 pt-12">
              {roadmap.map((item, index) => (
                <CarouselItem key={index} className="pl-8 md:basis-1/4 select-none">
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-[377px] rounded-b-2xl overflow-visible">
                      {/* Animated border SVG */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ overflow: "visible" }}
                      >
                        <defs>
                          <linearGradient id={`cardGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFE0FC" />
                            <stop offset="30%" stopColor="#E064F7" />
                            <stop offset="100%" stopColor="#8C16E9" />
                          </linearGradient>
                          <filter id={`glow-${index}`}>
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <motion.rect
                          x="1" y="1"
                          width="calc(100% - 2px)"
                          height="calc(100% - 2px)"
                          rx="16" ry="16"
                          fill="none"
                          stroke={`url(#cardGradient-${index})`}
                          strokeWidth="2"
                          filter={`url(#glow-${index})`}
                          custom={index}
                          initial="hidden"
                          animate={shouldAnimate ? "visible" : "hidden"}
                          variants={cardBorderAnimation}
                        />
                      </svg>

                      {/* Card background */}
                      <div className="absolute inset-0 bg-[linear-gradient(18deg,rgba(48,42,42,0.12)0%,rgba(185,185,185,0.12)100%)] rounded-b-2xl backdrop-blur-[25px] hover:bg-[linear-gradient(18deg,rgba(48,42,42,0.20)0%,rgba(185,185,185,0.20)100%)] transition-colors" />

                      {/* Card content — identical to original design */}
                      <div className="relative z-10 h-full">
                        {/* Hexagon badge — bleeds above card via negative top (overflow-visible on parent allows this) */}
                        <div className="relative flex items-center justify-center -top-12">
                          <svg xmlns="http://www.w3.org/2000/svg" width="106" height="92" viewBox="0 0 106 92" fill="none">
                            <path
                              d="M27.024 1.32612L78.5215 1.32612L104.27 45.9243L78.5215 90.5224L27.024 90.5224L1.27526 45.9243L27.024 1.32612Z"
                              fill="black"
                              stroke="url(#paint0_linear_84_599)"
                              strokeWidth="2"
                            />
                            <defs>
                              <linearGradient id="paint0_linear_84_599" x1="0.705103" y1="54.9402" x2="38.7438" y2="33.0152" gradientUnits="userSpaceOnUse">
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

                        {/* List capped at MAX_VISIBLE_ITEMS — overflow-hidden only on ul, not on badge wrapper */}
                        <ul className="ml-4 p-4 space-y-2 list-disc -mt-8 overflow-hidden max-h-[280px]">
                          {item.lists.slice(0, MAX_VISIBLE_ITEMS).map((list, listIndex) => (
                            <li key={listIndex} className="text-base">
                              {list}
                            </li>
                          ))}
                          {item.lists.length > MAX_VISIBLE_ITEMS && (
                            <li className="list-none text-xs text-[#aca0e4] pt-1">
                              +{item.lists.length - MAX_VISIBLE_ITEMS} more
                            </li>
                          )}
                        </ul>
                      </div>
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
