import React from "react";
import BgImg from "@/public/imgs/bulletstorm-bg.png";
import GroupImg from "@/public/imgs/bulletstorm-group.png";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";

export default function BulletStormBanner() {
  return (
    <section className="container">
      <div className="relative">
        <Image
          src={BgImg}
          alt="img"
          className="w-full h-[342px] lg:h-[452px] object-cover object-left rounded-2xl"
        />
        <div className="absolute left-8 inset-y-8 flex flex-col justify-between">
          <Image src={GroupImg} alt="img" className="w-72 lg:w-96" />
          <p className="text-3xl lg:text-5xl font-bold leading-normal lg:leading-normal capitalize">
            Beta Testing and
            <br /> Giveaway is <span className="text-[#BFF009]">live</span>
          </p>
          <div className="flex items-center gap-8">
            <Link href="https://forms.gle/nJJCJTM2D9c5GR2n8">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Join Testing</p>
              </Button>
            </Link>
            <Link href="https://x.com/_KultGames/status/1877692789708001680">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Enter Giveaway</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
