import React from "react";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";
// import XtremeBg from "@/public/imgs/xtremestuntbg.png";
// import XtremeLogo from "@/public/imgs/xtremelogo.png";

import rageRoadsBg from '@/public/imgs/xtreme-new-image.png';
import roadRagesLogo from '@/public/imgs/rage-roads.png';
import sophandLogo from '@/public/imgs/Sophon_Logo_Main.png';
import roadRagesSmBg from '@/public/imgs/rage-roads-sm.png';

// import XtremeBgSm from "@/public/imgs/xtremestuntbg-SM.png";


export default function BulletStormBanner() {
  return (
    <section className="container">
      <div className="relative rounded-2xl overflow-hidden bg-[#04080C] lg:min-h-[540px] min-h-[210px]  flex flex-col justify-end">
        <Image
          src={rageRoadsBg}
          alt="img"
          // fill
          priority
          className="bottom-0 w-[100%] h-[100%] right-0 max-md:hidden brightness-75 absolute"
        />
        <Image
          src={roadRagesSmBg}
          alt="img"
          priority
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        <div className="top-14 relative flex flex-row justify-between gap-2 lg:gap-8 md:pb-8 max-md:pb-32 max-sm:pb-10">
          <Image src={roadRagesLogo} alt="img" className="w-52 lg:w-40 " />
          <div className="flex items-center gap-8">
            <Link href="https://mintify.xyz/launchpad/sophonriderspass">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Mint NFT</p>
              </Button>
            </Link>
            {/* <Link href="https://mintify.xyz/launchpad/sophonriderspass">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Join Discord</p>
              </Button>
            </Link> */}
          </div>
          <Image src={sophandLogo} alt="img" className="w-52 lg:w-40" />
        </div>
      </div>
    </section>
  );
}
