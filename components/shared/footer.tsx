import KultLogo3 from "@/public/imgs/kult-logo-3.png";
import Image from "next/image";
import Link from "next/link";
import TelegramImg from "@/public/imgs/telegram.png";
import DiscordImg from "@/public/imgs/discord.png";
import InstagramImg from "@/public/imgs/instagram.png";
import TwitterImg from "@/public/imgs/twitter.png";
import MediumImg from "@/public/imgs/medium.png";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute w-full -top-16 h-[200px] bg-[linear-gradient(180deg,#040719_52%,rgba(4,7,25,0.00)100%)] -z-10"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        data-wf-ignore="true"
        data-object-fit="cover"
        className="absolute w-full h-full object-cover object-bottom opacity-[0.15] -z-20"
      >
        <source
          src="/videos/Footer-Video.mp4"
          type="video/mp4"
          data-wf-ignore="true"
        />
      </video>
      <div className="container pb-12 pt-16 flex flex-col lg:flex-row lg:items-start gap-12">
        <Image
          src={KultLogo3}
          alt="img"
          width={101}
          height={101}
          className="w-20 lg:mt-5"
        />
        <div className="flex-grow space-y-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
            <div className="lg:w-1/3 space-y-5">
              <h6 className="text-[25px] font-bold">KULT Games</h6>
              <p>
                Kult Games is leading a revolution in the gaming industry by
                introducing a visionary Play & Earn & Engage ecosystem that
                integrates Socialfi and multichain interoperability.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Link href="https://t.me/KultGamesOfficial">
                <Image src={TelegramImg} alt="img" />
              </Link>
              <Link href="https://discord.com/invite/2duGeatqtp">
                <Image src={DiscordImg} alt="img" />
              </Link>
              <Link href="https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr">
                <Image src={InstagramImg} alt="img" />
              </Link>
              <Link href="https://twitter.com/_KultGames">
                <Image src={TwitterImg} alt="img" />
              </Link>
              <Link href="https://medium.com/@kult_games">
                <Image src={MediumImg} alt="img" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between text-sm">
            <p className="text-[#CDBAF6] text-sm max-lg:text-center lg:text-base opacity-80">
              COPYRIGHT @2024 KULTGAMES LLC. | ALL RIGHTS RESERVED
            </p>
            {/* <div className="space-x-5 text-[#CDBAF6]">
              <Link href="/">TERMS OF SERVICE</Link>
              <Link href="/">PRIVACY POLICY</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
