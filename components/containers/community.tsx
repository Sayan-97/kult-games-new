import Image from "next/image";
import DiscordImg from "@/public/imgs/discord-image.png";
import TelegramImg from "@/public/imgs/telegram-icon.png";
import InstagramImg from "@/public/imgs/instagram-icon.png";
import AnnouncementImg from "@/public/imgs/announcement-icon.png";
import TwitterImg from "@/public/imgs/twitter-img-2.png";
import Button from "../shared/button";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function OurCommunity() {
  return (
    <section className="py-10 lg:py-16">
      <div className="container space-y-12">
        <h2>Join our community</h2>
        <div className="w-full max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <CardContainer className="inter-var py-0">
              <CardBody className="w-full h-[220px] lg:h-[280px] bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] flex gap-4 rounded-2xl">
                <div className="p-4 lg:p-8 flex flex-col justify-between gap-4">
                  <CardItem
                    as="h5"
                    translateZ="50"
                    className="text-xl lg:text-[27px] font-bold"
                  >
                    Discord Community
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-sm lg:text-base text-muted"
                  >
                    Join our discord today to engage with our vibrant community
                    of gamers
                  </CardItem>
                  <CardItem translateZ="50">
                    <Link href="https://discord.com/invite/2duGeatqtp">
                      <Button>
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
                  className="max-lg:w-[35%] object-cover object-center"
                />
              </CardBody>
            </CardContainer>

            <div className="grid grid-cols-3 gap-2 lg:gap-6">
              <CardContainer className="inter-var w-full py-0">
                <CardBody className="w-full h-auto group/card">
                  <Link href="https://t.me/KultGamesOfficial">
                    <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                      <Image
                        src={TelegramImg}
                        alt="img"
                        className="max-lg:w-[70%]"
                      />
                      <CardItem
                        as="p"
                        translateZ="50"
                        className="text-xs lg:text-base"
                      >
                        Telegram
                      </CardItem>
                    </div>
                  </Link>
                </CardBody>
              </CardContainer>
              <Link href="https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr">
                <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                  <Image
                    src={InstagramImg}
                    alt="img"
                    className="max-lg:w-[70%]"
                  />
                  <p className="text-xs lg:text-base">Instagram</p>
                </div>
              </Link>
              <Link href="https://medium.com/@kult_games">
                <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                  <Image
                    src={AnnouncementImg}
                    alt="img"
                    className="max-lg:w-[40%]"
                  />
                  <p className="text-xs lg:text-base">Announcement</p>
                </div>
              </Link>
            </div>
          </div>

          <CardContainer className="w-full inter-var">
            <CardBody className="w-full h-auto group/card">
              <div className="lg:h-[464px] rounded-2xl max-lg:space-y-4 bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 flex flex-col justify-between">
                <div className="flex flex-col lg:flex-row items-start lg:items-end max-lg:gap-4 justify-between">
                  <div className="lg:w-2/3 space-y-5">
                    <CardItem
                      as="p"
                      translateZ="50"
                      className="text-[27px] font-bold"
                    >
                      Follow us on Twitter
                    </CardItem>
                    <p className="text-muted">
                      Follow us on twitter to get latest updates and
                      announcements
                    </p>
                  </div>
                  <CardItem translateZ="50">
                    <Link href="https://twitter.com/_KultGames">
                      <Button>
                        <HiOutlineArrowRightCircle />
                        Follow Now
                      </Button>
                    </Link>
                  </CardItem>
                </div>
                <Image src={TwitterImg} alt="img" className="w-full" />
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
