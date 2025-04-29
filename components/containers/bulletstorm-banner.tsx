import React from "react";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";
import XtremeBg from "@/public/imgs/xtremestuntbg.png";
import XtremeBgSm from "@/public/imgs/xtremestuntbg-SM.png";
import XtremeLogo from "@/public/imgs/xtremelogo.png";

export default function BulletStormBanner() {
  return (
    <section className="container">
      <div className="relative rounded-2xl overflow-hidden bg-[#04080C]">
        <Image
          src={XtremeBg}
          alt="img"
          // fill
          priority
          className="bottom-0 w-[60%] right-0 max-md:hidden brightness-75 absolute"
        />
        <Image
          src={XtremeBgSm}
          alt="img"
          priority
          className="absolute bottom-0 md:hidden"
        />
        <div className="relative flex flex-col justify-between gap-2 lg:gap-8 p-8 max-md:pb-32">
          <Image src={XtremeLogo} alt="img" className="w-52 lg:w-96" />
          <p className="lg:w-[40%] text-xl lg:text-4xl leading-normal lg:leading-normal capitalize font-generalSans">
            🏆 Unlock true glory with the Exclusive Pass
          </p>
          <div className="flex items-center gap-8">
            <Link href="/">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Mint NFT</p>
              </Button>
            </Link>
            {/* <Link href="https://discord.gg/Z5mkgXHs">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Join Discord</p>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
