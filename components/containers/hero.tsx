"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./form";

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
  return (
    <section className="relative w-full min-h-screen rounded-b-[64px] overflow-hidden flex items-end">
      <video
        autoPlay
        muted
        loop
        playsInline
        data-wf-ignore="true"
        data-object-fit="cover"
        className="absolute w-full h-screen object-cover -z-20 rounded-b-[64px]"
      >
        <source
          src="/videos/hero render.mp4"
          type="video/mp4"
          data-wf-ignore="true"
        />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,25,0.00)_30%,rgba(84,22,233,0.71)100%)] md:bg-[linear-gradient(180deg,rgba(4,7,25,0.00)42.87%,rgba(84,22,233,0.71)100%)] -z-10"></div>
      <motion.div
        className="container md:w-[80%] flex flex-col items-center gap-6 text-center py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-[36px] md:text-[57px] font-ethnocentric"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ECOSYSTEM FOR GAMERS BY GAMERS
        </motion.h1>
        <motion.p
          className="md:text-lg md:px-32 font-semibold"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Kult Games is leading a revolution in the gaming industry by
          introducing a visionary Play & Earn & Engage ecosystem that integrates
          Socialfi and multichain interoperability.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <WaitlistForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
