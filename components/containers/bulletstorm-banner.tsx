"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";
import bg from "@/public/imgs/bg.png";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function BulletStormBanner() {
  return (
    <section className="container overflow-hidden">
      <motion.div
        draggable={false}
        className="relative rounded-2xl overflow-hidden bg-[#04080C] md:min-h-[650px] sm:h-[200px] md:h-[510px] flex flex-col justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
      >
        <Link href="https://zerogpool.xyz/" target="_blank" draggable={false} className="bottom-0 w-[100%] h-[100%] right-0 max-md:hidden absolute cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src={bg}
            alt="img"
            priority
            className="w-full h-full brightness-75"
            draggable={false}
          />
        </Link>
        <Link href="https://highwayhustle.xyz/" target="_blank" draggable={false} className="md:hidden cursor-pointer hover:opacity-90 transition-opacity">
          <Image src={bg} alt="img" priority draggable={false} />
        </Link>
        <motion.div
          className="absolute flex justify-center w-full bottom-10 hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="https://zerogpool.xyz/" target="_blank" draggable={false}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-32 md:w-40 h-11">
                <p className="text-xs md:text-sm font-ethnocentric whitespace-nowrap">Start Game</p>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          className="absolute flex justify-center w-full bottom-1 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="https://zerogpool.xyz/" target="_blank" draggable={false}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-32 md:w-40 h-11">
                <p className="text-xs md:text-sm font-ethnocentric whitespace-nowrap">Start Game</p>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
