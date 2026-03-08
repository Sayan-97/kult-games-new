"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, TargetAndTransition } from "framer-motion";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";
import bg from "@/public/imgs/bg.png";
import { AnimatedSection, scaleIn, staggerItem } from "../shared/animations";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { trackClarityEvent } from "@/lib/clarity";

export default function BulletStormBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const direction = useScrollDirection();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && direction === "down") {
      setHasAnimated(true);
    } else if (!isInView && direction === "up") {
      setHasAnimated(false);
    }
  }, [isInView, direction]);

  const isVisible = hasAnimated || isInView;
  const isScrollingUp = direction === "up";

  return (
    <section ref={ref} className="container overflow-hidden py-10">
      <AnimatedSection
        variant={scaleIn}
        threshold={0.3}
        className="relative rounded-2xl overflow-hidden bg-[#04080C] md:min-h-[650px] sm:h-[200px] md:h-[510px] flex flex-col justify-end"
      >
        <Link
          href="https://zerogpool.xyz/"
          target="_blank"
          draggable={false}
          onClick={() => trackClarityEvent("bulletstorm_banner_click")}
          className="bottom-0 w-[100%] h-[100%] right-0 max-md:hidden absolute cursor-pointer hover:opacity-90 transition-opacity"
        >
          <Image
            src={bg}
            alt="img"
            priority
            className="w-full h-full brightness-75"
            draggable={false}
          />
        </Link>
        <Link
          href="https://highwayhustle.xyz/"
          target="_blank"
          draggable={false}
          onClick={() => trackClarityEvent("bulletstorm_banner_click")}
          className="md:hidden cursor-pointer hover:opacity-90 transition-opacity"
        >
          <Image src={bg} alt="img" priority draggable={false} />
        </Link>

        <motion.div
          className="absolute flex justify-center w-full bottom-10 hidden md:flex"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            ...staggerItem,
            visible: {
              ...staggerItem.visible,
              transition: {
                ...(staggerItem.visible as TargetAndTransition)?.transition,
                ...(isScrollingUp ? { duration: 0, delay: 0 } : { delay: 0.3 })
              }
            }
          }}
        >
          <Link
            href="https://zerogpool.xyz/"
            target="_blank"
            draggable={false}
            onClick={() => trackClarityEvent("bulletstorm_cta_click")}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-32 md:w-40 h-11">
                <p className="text-xs md:text-sm font-ethnocentric whitespace-nowrap">Start Game</p>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          className="absolute flex justify-center w-full bottom-1 md:hidden"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            ...staggerItem,
            visible: {
              ...staggerItem.visible,
              transition: {
                ...(staggerItem.visible as TargetAndTransition)?.transition,
                ...(isScrollingUp ? { duration: 0, delay: 0 } : { delay: 0.3 })
              }
            }
          }}
        >
          <Link
            href="https://zerogpool.xyz/"
            target="_blank"
            draggable={false}
            onClick={() => trackClarityEvent("bulletstorm_cta_click")}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-32 md:w-40 h-11">
                <p className="text-xs md:text-sm font-ethnocentric whitespace-nowrap">Start Game</p>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
