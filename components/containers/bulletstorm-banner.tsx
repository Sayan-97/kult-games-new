import React from "react";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";
// import XtremeBg from "@/public/imgs/xtremestuntbg.png";
// import XtremeLogo from "@/public/imgs/xtremelogo.png";

import rageRoadsBg from '@/public/imgs/xtreme-new-image.png';
import bg from '@/public/imgs/bg.png';
import roadRagesLogo from '@/public/imgs/rage-roads.png';
import sophandLogo from '@/public/imgs/Sophon_Logo_Main.png';
import roadRagesSmBg from '@/public/imgs/rage-roads-sm.png';

// import XtremeBgSm from "@/public/imgs/xtremestuntbg-SM.png";


export default function BulletStormBanner() {
  return (
    <section className="container ">
      <div className="relative rounded-2xl overflow-hidden bg-[#04080C] lg:min-h-[800px] sm:h-[200px] md:h-[510px]  flex flex-col justify-end">
        <Image
          src={bg}
          alt="img"
          // fill
          priority
          className="bottom-0 w-[100%] h-[100%] right-0 max-md:hidden brightness-75 absolute"
        />
        <Image
          src={bg}
          alt="img"
          priority
        />
        <div className="absolute right-10 top-10 flex flex-col gap-4 hidden sm:hidden md:block">
          <div className="flex items-center gap-8 ">
            <Link href="https://app.mintify.com/launchpad/morphspeedlegends">
              <Button className="w-32 lg:w-60 h-11">
                <p className="text-xs lg:text-sm">Mint NFT</p>
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-8 mt-4">
            <Link href="https://highwayhustle.xyz/">
              <Button className="w-32 lg:w-60 h-11 ">
                <p className="text-xs lg:text-sm">Start Game</p>
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute flex w-full bottom-1 flex flex-row justify-center  gap-4  md:hidden">
          <div className="flex items-center gap-8 ">
            <Link href="https://app.mintify.com/launchpad/morphspeedlegends">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Mint NFT</p>
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="https://highwayhustle.xyz/">
              <Button className="w-32 lg:w-40 h-11 ">
                <p className="text-xs lg:text-sm">Start Game</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
