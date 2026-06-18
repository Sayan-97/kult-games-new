"use client";

import { motion } from "framer-motion";
import KultLogo3 from "@/public/imgs/kult-logo-3.png";
import Image from "next/image";
import Link from "next/link";
import TelegramImg from "@/public/imgs/telegram.png";
import DiscordImg from "@/public/imgs/discord.png";
import InstagramImg from "@/public/imgs/instagram.png";
import TwitterImg from "@/public/imgs/twitter.png";
import MediumImg from "@/public/imgs/medium.png";
import { trackClarityEvent } from "@/lib/clarity";
import { useRef, useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const staggerItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } }
};

const socialLinks = [
  { href: "https://t.me/KultGamesOfficial", img: TelegramImg, event: "footer_telegram_click" },
  { href: "https://discord.gg/Cge7rrCyUB", img: DiscordImg, event: "footer_discord_click" },
  { href: "https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr", img: InstagramImg, event: "footer_instagram_click" },
  { href: "https://twitter.com/_KultGames", img: TwitterImg, event: "footer_twitter_click" },
  { href: "https://medium.com/@kult_games", img: MediumImg, event: "footer_medium_click" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc("/videos/Footer-Video.mp4");
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      <div className="absolute w-full -top-16 h-[200px] bg-[linear-gradient(180deg,#040719_52%,rgba(4,7,25,0.00)100%)] -z-10"></div>
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          data-wf-ignore="true"
          data-object-fit="cover"
          className="absolute w-full h-full object-cover object-bottom opacity-[0.15] -z-20"
        >
          <source
            src={videoSrc}
            type="video/mp4"
            data-wf-ignore="true"
          />
        </video>
      )}
      <motion.div
        className="container pb-12 pt-16 flex flex-col md:flex-row md:items-start gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={KultLogo3}
            alt="img"
            width={101}
            height={101}
            className="w-20 md:mt-5"
            draggable={false}
          />
        </motion.div>
        <div className="flex-grow space-y-10">
          <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
            <motion.div
              className="md:w-1/3 space-y-5"
              variants={fadeInUp}
            >
              <h6 className="text-[25px] font-ethnocentric">KULT GAMES</h6>
              <p className="font-semibold">
                The Gateway to Intelligent Gaming
                <br/>
                • One Identity 
                <br/>
                • Autonomous Agents 
                <br/>
                • Prediction AI 
                <br />
                • Infinite Experiences


                {/* Kult Games is leading a revolution in the gaming industry by
                introducing a visionary Play & Earn & Engage ecosystem that
                integrates Socialfi and multichain interoperability. */}
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    onClick={() => trackClarityEvent(social.event)}
                  >
                    <Image src={social.img} alt="social" className="w-12" draggable={false} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4 justify-between text-sm"
            variants={fadeInUp}
          >
            <p className="text-[#CDBAF6] text-sm max-md:text-center md:text-base opacity-80 font-ethnocentric">
              COPYRIGHT @2024 KULTGAMES LLC. | ALL RIGHTS RESERVED
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
