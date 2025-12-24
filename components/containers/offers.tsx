"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import OffersImg from "@/public/imgs/offers-img.png";
import OffersImgSm1 from "@/public/imgs/offers-img-sm-1.png";
import OffersImgSm2 from "@/public/imgs/offers-img-sm-2.png";
import KultLogo from "@/public/imgs/Kult-Emblem-Variation.png";
import Image from "next/image";
import OffersGrad from "@/public/imgs/offers-grad.png";
import Button from "../shared/button";
import { SlArrowRightCircle } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import Magnetic from "../shared/magnetic";
import { AnimatedSection, scaleIn, fadeInUp } from "../shared/animations";

export default function KultOffers() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)", "circle(100% at 50% 50%)"]
  );

  const logoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} data-birds data-no-flames className="relative py-10 md:py-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[#040719]"
        style={{ clipPath }}
      />
      <AnimatedSection threshold={0.1} className="container space-y-12">
        <motion.h2 className="text-center font-ethnocentric" variants={fadeInUp}>
          Kult Offers
        </motion.h2>

        <AnimatedSection variant={scaleIn} threshold={0.3} className="relative flex items-center justify-center max-lg:hidden">
          <Image
            src={OffersImg}
            alt="img"
            width={1240}
            height={912.54}
            className=""
            priority
            draggable={false}
          />
          <motion.div style={{ y: logoY }} className="absolute">
            <Image
              src={KultLogo}
              alt="img"
              className="animate-spin"
              priority
              draggable={false}
            />
          </motion.div>
          <motion.div
            className="absolute left-5 bottom-5"
            style={{ transformOrigin: "left bottom" }}
          >
            <Magnetic>
              <Button
                onClick={() => setOpen(true)}
                className="font-medium px-4 py-3"
              >
                <SlArrowRightCircle className="text-xl" />
                Discover <br /> Kult
              </Button>
            </Magnetic>
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center max-lg:hidden"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="w-[60%] flex flex-col items-end gap-4"
                >
                  <CgClose
                    onClick={() => setOpen(false)}
                    className="text-2xl cursor-pointer"
                  />
                  <video
                    autoPlay
                    loop
                    controls
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                    className=""
                  >
                    <source
                      src="/videos/Kultfinalvfx.mp4"
                      type="video/mp4"
                      data-wf-ignore="true"
                    />
                  </video>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>

        <AnimatedSection variant={scaleIn} threshold={0.2} className="lg:hidden space-y-5">
          <div className="relative flex items-center justify-center">
            <Image src={OffersImgSm1} alt="img" priority draggable={false} className="w-full md:w-[80%] mx-auto" />
            <Image
              src={KultLogo}
              alt="img"
              className="w-[40%] md:w-[30%] absolute animate-spin"
              priority
              draggable={false}
            />
          </div>
          <Image src={OffersImgSm2} alt="img" priority draggable={false} className="w-full md:w-[80%] mx-auto" />

          <Magnetic>
            <Button
              onClick={() => setOpen(true)}
              className="absolute max-xs:right-7 right-10 md:right-[15%] max-xs:bottom-[100px] bottom-[110px] md:bottom-[130px] py-3"
            >
              <SlArrowRightCircle />
              Discover Kult
            </Button>
          </Magnetic>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center lg:hidden"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="w-[90%] md:w-[70%] flex flex-col items-end gap-4"
                >
                  <CgClose
                    onClick={() => setOpen(false)}
                    className="text-2xl cursor-pointer"
                  />
                  <video
                    autoPlay
                    loop
                    controls
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                    className=""
                  >
                    <source
                      src="/videos/Kultfinalvfx.mp4"
                      type="video/mp4"
                      data-wf-ignore="true"
                    />
                  </video>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </AnimatedSection>
      <Image
        src={OffersGrad}
        alt="img"
        className="absolute right-0 -bottom-80 -z-10"
        draggable={false}
      />
    </section>
  );
}
