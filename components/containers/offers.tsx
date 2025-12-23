"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OffersImg from "@/public/imgs/offers-img.png";
import OffersImgSm1 from "@/public/imgs/offers-img-sm-1.png";
import OffersImgSm2 from "@/public/imgs/offers-img-sm-2.png";
import KultLogo from "@/public/imgs/Kult-Emblem-Variation.png";
import Image from "next/image";
import OffersGrad from "@/public/imgs/offers-grad.png";
import Button from "../shared/button";
import { SlArrowRightCircle } from "react-icons/sl";
import { CgClose } from "react-icons/cg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function KultOffers() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-10 md:py-16 overflow-hidden">
      <div className="container space-y-12">
        <motion.h2
          className="text-center font-ethnocentric"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          Kult Offers
        </motion.h2>
        <motion.div
          className="relative flex items-center justify-center max-md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <Image
            src={OffersImg}
            alt="img"
            width={1240}
            height={912.54}
            className=""
            priority
            draggable={false}
          />
          <Image
            src={KultLogo}
            alt="img"
            className="absolute animate-spin"
            priority
            draggable={false}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setOpen(true)}
              className="absolute left-5 bottom-5 font-medium px-1 py-1 text-xs sm:text-sm"
            >
              <SlArrowRightCircle />
              Discover <br /> Kult
            </Button>
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center max-md:hidden"
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
        </motion.div>

        <motion.div
          className="md:hidden space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <div className="relative flex items-center justify-center">
            <Image src={OffersImgSm1} alt="img" priority draggable={false} />
            <Image
              src={KultLogo}
              alt="img"
              className="w-[50%] absolute animate-spin"
              priority
              draggable={false}
            />
          </div>
          <Image src={OffersImgSm2} alt="img" priority draggable={false} />

          <Button
            onClick={() => setOpen(true)}
            className="absolute max-xs:right-7 right-10 max-xs:bottom-[100px] bottom-[110px] py-3"
          >
            <SlArrowRightCircle />
            Discover Kult
          </Button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center md:hidden"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="w-[90%] flex flex-col items-end gap-4"
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
        </motion.div>
      </div>
      <Image
        src={OffersGrad}
        alt="img"
        className="absolute right-0 -bottom-80 -z-10"
        draggable={false}
      />
    </section>
  );
}
