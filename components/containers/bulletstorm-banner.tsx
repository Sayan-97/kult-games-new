import React from "react";
import BgImg from "@/public/imgs/bulletstorm-bg.png";
import GroupImg from "@/public/imgs/bulletstorm-group.png";
import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";

export default function BulletStormBanner() {
  return (
    <section className="container">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={BgImg}
          alt="img"
          fill
          className="object-cover max-md:object-left"
        />
        <div className="relative flex flex-col justify-between gap-8 p-8">
          <Image src={GroupImg} alt="img" className="w-72 lg:w-96" />
          <p className="text-3xl lg:text-4xl leading-normal lg:leading-normal capitalize font-generalSans">
            hero's Assemble - Bullet
            <br /> Storm is now live
          </p>
          <div className="flex items-center gap-8">
            <Link href="https://bulletstorm.xyz/">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Play Now</p>
              </Button>
            </Link>
            <Link href="https://discord.gg/Z5mkgXHs">
              <Button className="w-32 lg:w-40 h-11">
                <p className="text-xs lg:text-sm">Join Discord</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
