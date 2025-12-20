import React from "react";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";
// import XtremeBg from "@/public/imgs/xtremestuntbg.png";
// import XtremeLogo from "@/public/imgs/xtremelogo.png";

// import rageRoadsBg from '@/public/imgs/xtreme-new-image.png';
import bg from "@/public/imgs/bg.png";
// import roadRagesLogo from '@/public/imgs/rage-roads.png';
// import sophandLogo from '@/public/imgs/Sophon_Logo_Main.png';
// import roadRagesSmBg from '@/public/imgs/rage-roads-sm.png';

// import XtremeBgSm from "@/public/imgs/xtremestuntbg-SM.png";

export default function BulletStormBanner() {
  return (
    <section className="container ">
      <div className="relative rounded-2xl overflow-hidden bg-[#04080C] lg:min-h-[800px] sm:h-[200px] md:h-[510px]  flex flex-col justify-end">
        <Link href="https://zerogpool.xyz/" target="_blank" draggable={false} className="bottom-0 w-[100%] h-[100%] right-0 max-md:hidden absolute cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src={bg}
            alt="img"
            priority
            className="w-full h-full brightness-75"
          // draggable={false}
          />
        </Link>
        <Link href="https://highwayhustle.xyz/" target="_blank" draggable={false} className="md:hidden cursor-pointer hover:opacity-90 transition-opacity">
          <Image src={bg} alt="img" priority draggable={false} />
        </Link>
        <div className="absolute flex justify-center w-full bottom-10 hidden md:flex">
          <Link href="https://zerogpool.xyz/" target="_blank">
            <Button className="w-32 lg:w-40 h-11">
              <p className="text-xs lg:text-sm">Start Game</p>
            </Button>
          </Link>
        </div>

        <div className="absolute flex justify-center w-full bottom-1 md:hidden">
          <Link href="https://zerogpool.xyz/" target="_blank">
            <Button className="w-32 lg:w-40 h-11">
              <p className="text-xs lg:text-sm">Start Game</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
