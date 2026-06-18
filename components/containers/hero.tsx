"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import WaitlistForm from "./form";
import Magnetic from "../shared/magnetic";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { CgClose } from "react-icons/cg";
import { SlArrowRightCircle } from "react-icons/sl";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const direction = useScrollDirection();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    if (isInView && direction === "down") {
      setHasAnimated(true);
    } else if (!isInView && direction === "up") {
      setHasAnimated(false);
    }
  }, [isInView, direction]);

  const isVisible = hasAnimated || isInView;
  const isScrollingUp = direction === "up";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen rounded-b-[64px] overflow-hidden flex items-end">
      <motion.div style={{ y: videoY }} className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          data-wf-ignore="true"
          data-object-fit="cover"
          className="w-full h-screen object-cover rounded-b-[64px]"
        >
          <source
            src="/videos/hero render.mp4"
            type="video/mp4"
            data-wf-ignore="true"
          />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,25,0.00)_30%,rgba(84,22,233,0.71)100%)] md:bg-[linear-gradient(180deg,rgba(4,7,25,0.00)42.87%,rgba(84,22,233,0.71)100%)] -z-10"></div>
      <motion.div
        className="container md:w-[80%] flex flex-col items-center gap-6 text-center py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          ...staggerContainer,
          visible: {
            ...staggerContainer.visible,
            transition: {
              ...staggerContainer.visible.transition,
              ...(isScrollingUp ? { staggerChildren: 0, delayChildren: 0 } : {})
            }
          }
        }}
      >
        <motion.h1
          className="text-[36px] md:text-[57px] font-ethnocentric leading-tight flex flex-wrap justify-center gap-x-[0.3em]"
          variants={staggerContainer}
        >
          {"THE GATEWAY TO INTELLIGENT GAMING".split(" ").map((word, i) => (
            <span key={i} className="relative overflow-hidden inline-block pb-[0.1em]">
              <motion.span
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: 0,
                    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
                  }
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="md:text-lg md:px-32 font-semibold"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Create autonomous AI agents that play, predict, compete, and evolve across connected gaming experiences.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <Magnetic strength={0.2}>
            <WaitlistForm largeMessage />
          </Magnetic>
          <button
            onClick={() => setDemoOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors underline underline-offset-4"
          >
            <SlArrowRightCircle className="text-base" />
            Watch Demo
          </button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {demoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-[90%] md:w-[60%] flex flex-col items-end gap-4"
            >
              <CgClose
                onClick={() => setDemoOpen(false)}
                className="text-2xl cursor-pointer"
              />
              <video
                autoPlay
                loop
                controls
                playsInline
                preload="none"
                className="w-full rounded-xl"
              >
                <source src="/videos/Kultfinalvfx.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
