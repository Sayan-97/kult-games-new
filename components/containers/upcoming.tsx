"use client";

import { upcomingGames } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import Button from "../shared/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import GradImg from "@/public/imgs/offers-grad.png";
import { MdMonitor } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

export default function Upcoming() {
  const [show, setShow] = useState<number | null>(null);
  return (
    <section className="relative py-10 lg:py-16">
      <Image src={GradImg} alt="img" className="absolute right-0 -z-10" />
      <div className="container space-y-12">
        <h2>Upcoming big titles</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {upcomingGames.map((item, index) => (
            <div key={index} className="space-y-4">
              <div
                onMouseEnter={() => setShow(index)}
                onMouseLeave={() => setShow(null)}
                className="relative w-full h-[160px] lg:h-[327px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.image}
                  alt="img"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className={`max-lg:hidden absolute inset-x-0 flex justify-center ${
                    show === index ? "bottom-4" : "-bottom-[100%]"
                  } transition-all ease-in-out`}
                >
                  <Button>
                    <FaRegCirclePlay />
                    Watch Teaser
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="lg:text-2xl font-bold leading-none truncate">
                  {item.name}
                </p>
                <p className="text-xs lg:text-sm text-muted whitespace-nowrap truncate">
                  {item.types.join(", ")}
                </p>
                <div className="flex items-center gap-4">
                  {item.web && (
                    <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                      <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                        <MdMonitor />
                      </div>
                    </div>
                  )}
                  {item.mobile && (
                    <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                      <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                        <HiOutlineDevicePhoneMobile />
                      </div>
                    </div>
                  )}
                </div>
                <Button className="lg:hidden">
                  <FaRegCirclePlay />
                  Watch Teaser
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
