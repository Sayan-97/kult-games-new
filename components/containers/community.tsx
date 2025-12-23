"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DiscordImg from "@/public/imgs/discord-image.png";
import TelegramImg from "@/public/imgs/telegram-icon.png";
import InstagramImg from "@/public/imgs/instagram-icon.png";
import AnnouncementImg from "@/public/imgs/announcement-icon.png";
import Button from "../shared/button";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { ScrollArea } from "../ui/scroll-area";
import TwitterPostImg from "@/public/imgs/twitter-post.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function OurCommunity() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container space-y-12">
        <motion.h2
          className="font-ethnocentric"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          Join our community
        </motion.h2>
        <div className="w-full max-md:flex max-md:flex-col-reverse md:grid md:grid-cols-2 gap-6">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <CardContainer className="inter-var py-0">
              <CardBody className="w-full h-[220px] md:h-[280px] bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] flex gap-4 rounded-2xl">
                <div className="p-4 md:p-8 flex flex-col justify-between gap-4">
                  <CardItem
                    as="h5"
                    translateZ="50"
                    className="text-xl md:text-[27px] font-ethnocentric"
                  >
                    Discord Community
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-sm md:text-base text-muted font-semibold"
                  >
                    Join our discord today to engage with our vibrant community
                    of gamers
                  </CardItem>
                  <CardItem translateZ="50">
                    <Link href="https://discord.gg/Cge7rrCyUB" target="_blank">
                      <Button className="font-ethnocentric whitespace-nowrap">
                        <HiOutlineArrowRightCircle />
                        Join Now
                      </Button>
                    </Link>
                  </CardItem>
                </div>
                <Image
                  src={DiscordImg}
                  alt="DiscordImg"
                  width={266}
                  height={256}
                  className="max-md:w-[35%] object-cover object-center"
                  draggable={false}
                />
              </CardBody>
            </CardContainer>

            <motion.div
              className="grid grid-cols-3 gap-2 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem}>
                <CardContainer className="inter-var w-full py-0">
                  <CardBody className="w-full h-auto group/card">
                    <Link href="https://t.me/KultGamesOfficial" target="_blank">
                      <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2 hover:bg-[rgba(89,106,197,0.20)] transition-colors">
                        <Image
                          src={TelegramImg}
                          alt="img"
                          className="max-md:w-[70%]"
                          draggable={false}
                        />
                        <CardItem
                          as="p"
                          translateZ="50"
                          className="text-xs md:text-base font-semibold"
                        >
                          Telegram
                        </CardItem>
                      </div>
                    </Link>
                  </CardBody>
                </CardContainer>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link href="https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr" target="_blank">
                  <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2 hover:bg-[rgba(89,106,197,0.20)] transition-colors">
                    <Image
                      src={InstagramImg}
                      alt="img"
                      className="max-md:w-[70%]"
                      draggable={false}
                    />
                    <p className="text-xs md:text-base font-semibold">Instagram</p>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link href="https://medium.com/@kult_games" target="_blank">
                  <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2 hover:bg-[rgba(89,106,197,0.20)] transition-colors">
                    <Image
                      src={AnnouncementImg}
                      alt="img"
                      className="max-md:w-[40%]"
                      draggable={false}
                    />
                    <p className="text-xs md:text-base font-semibold">Announcement</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <CardContainer className="w-full inter-var">
              <CardBody className="relative group/card w-full md:h-[464px] rounded-2xl max-md:space-y-4 bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-6 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row items-start md:items-end max-md:gap-4 justify-between">
                  <div className="md:w-2/3 space-y-5">
                    <CardItem
                      as="h5"
                      translateZ="100"
                      className="text-[27px] font-ethnocentric"
                    >
                      Follow us on Twitter
                    </CardItem>
                    <p className="text-muted font-semibold">
                      Follow us on twitter to get latest updates and announcements
                    </p>
                  </div>
                  <CardItem translateZ="50">
                    <Link href="https://twitter.com/_KultGames" target="_blank">
                      <Button className="font-ethnocentric whitespace-nowrap">
                        <HiOutlineArrowRightCircle />
                        Follow Now
                      </Button>
                    </Link>
                  </CardItem>
                </div>
                <CardItem translateZ="50">
                  <ScrollArea className="mt-5 w-full h-[280px]">
                    <Image
                      src={TwitterPostImg}
                      alt="img"
                      className="w-full h-auto bg-black rounded-xl"
                      priority
                      draggable={false}
                    />
                  </ScrollArea>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
