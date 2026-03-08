"use client";

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
import { AnimatedSection, StaggeredContainer, StaggeredItem, fadeInUp, fadeInLeft, fadeInRight } from "../shared/animations";
import { trackClarityEvent } from "@/lib/clarity";

export default function OurCommunity() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container space-y-12">
        <AnimatedSection variant={fadeInUp}>
          <h2 className="font-ethnocentric">Join our community</h2>
        </AnimatedSection>
        <div className="w-full max-md:flex max-md:flex-col-reverse md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedSection variant={fadeInLeft} threshold={0.2} className="space-y-6">
            <CardContainer className="inter-var py-0">
              <CardBody className="w-full h-[220px] md:h-[240px] lg:h-[280px] bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] flex gap-4 rounded-2xl">
                <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-between gap-4">
                  <CardItem
                    as="h5"
                    translateZ="50"
                    className="text-xl md:text-2xl lg:text-[27px] font-ethnocentric"
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
                    <Link
                      href="https://discord.gg/Cge7rrCyUB"
                      target="_blank"
                      onClick={() => trackClarityEvent("community_discord_click")}
                    >
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

            <StaggeredContainer className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
              <StaggeredItem>
                <CardContainer className="inter-var w-full py-0">
                  <CardBody className="w-full h-auto group/card">
                    <Link
                      href="https://t.me/KultGamesOfficial"
                      target="_blank"
                      onClick={() => trackClarityEvent("community_telegram_click")}
                    >
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
              </StaggeredItem>
              <StaggeredItem>
                <Link
                  href="https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr"
                  target="_blank"
                  onClick={() => trackClarityEvent("community_instagram_click")}
                >
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
              </StaggeredItem>
              <StaggeredItem>
                <Link
                  href="https://twitter.com/_KultGames"
                  target="_blank"
                  onClick={() => trackClarityEvent("community_announcement_click")}
                >
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
              </StaggeredItem>
            </StaggeredContainer>
          </AnimatedSection>

          <AnimatedSection variant={fadeInRight} threshold={0.2}>
            <CardContainer className="w-full inter-var">
              <CardBody className="relative group/card w-full md:h-auto lg:h-[464px] rounded-2xl max-md:space-y-4 bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 md:p-5 lg:p-6 flex flex-col justify-between">
                <div className="flex flex-col md:flex-row items-start md:items-center lg:items-end max-md:gap-4 justify-between">
                  <div className="md:w-2/3 space-y-5">
                    <CardItem
                      as="h5"
                      translateZ="100"
                      className="text-xl md:text-2xl lg:text-[27px] font-ethnocentric"
                    >
                      Follow us on X(Twitter)
                    </CardItem>
                    <p className="text-muted font-semibold">
                      Follow us on X(Twitter) to get latest updates and announcements
                    </p>
                  </div>
                  <CardItem translateZ="50">
                    <Link
                      href="https://twitter.com/_KultGames"
                      target="_blank"
                      onClick={() => trackClarityEvent("community_twitter_click")}
                    >
                      <Button className="font-ethnocentric whitespace-nowrap">
                        <HiOutlineArrowRightCircle />
                        Follow Now
                      </Button>
                    </Link>
                  </CardItem>
                </div>
                <CardItem translateZ="50">
                  <ScrollArea className="mt-5 w-full h-[200px] md:h-[220px] lg:h-[280px]">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
