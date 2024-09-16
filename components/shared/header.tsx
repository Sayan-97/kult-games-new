import Image from "next/image";
import AppLogo from "@/public/imgs/kult-games-logo.png";
import AppLogo2 from "@/public/imgs/kult-logo-3.png";
import Link from "next/link";

import TelegramImg from "@/public/imgs/telegram.png";
import DiscordImg from "@/public/imgs/discord.png";
import InstagramImg from "@/public/imgs/instagram.png";
import TwitterImg from "@/public/imgs/twitter.png";
import MediumImg from "@/public/imgs/medium.png";
import { TfiMenu } from "react-icons/tfi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const NavMenus = () => {
    return (
      <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
        {[
          { label: "Home", link: "/" },
          { label: "Our Games", link: "#ourgames" },
          {
            label: "Live Poker",
            link: "https://madmaxpoker.aistechnolabs.info/guestWebgl/",
          },
          { label: "Kult Offers", link: "#kultoffers" },
          { label: "Roadmap", link: "#roadmap" },
          { label: "Team", link: "#team" },
          { label: "Community", link: "#community" },
        ].map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const SocialLinks = () => {
    return (
      <ul className="flex items-center gap-5">
        {[
          { img: TelegramImg, link: "https://t.me/KultGamesOfficial" },
          { img: DiscordImg, link: "https://discord.com/invite/2duGeatqtp" },
          {
            img: InstagramImg,
            link: "https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr",
          },
          { img: TwitterImg, link: "https://twitter.com/_KultGames" },
          { img: MediumImg, link: "https://medium.com/@kult_games" },
        ].map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <Image src={item.img} alt="img" className="w-12 h-auto" />
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="absolute inset-x-0 py-6 z-40 bg-[linear-gradient(180deg,#040719_0%,rgba(4,7,25,0.00)100%)]">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="lg:hidden">
          <Image src={AppLogo2} alt="img" className="w-14" />
        </Link>
        <div className="max-lg:hidden flex items-center gap-20">
          <Image src={AppLogo} alt="img" className="max-w-32 h-auto" />
          {/* <NavMenus /> */}
        </div>
        <div className="max-lg:hidden">
          <SocialLinks />
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <TfiMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent className="lg:hidden bg-violet-950 border-none flex flex-col gap-8 pt-14">
            {/* <NavMenus /> */}
            <SocialLinks />
          </SheetContent>
        </Sheet>
      </nav>

      {/* <Newsletter /> */}
    </header>
  );
}
