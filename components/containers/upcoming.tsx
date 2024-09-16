"use client";

import { upcomingGames } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import Button from "../shared/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import GradImg from "@/public/imgs/offers-grad.png"

export default function Upcoming() {
  const [show, setShow] = useState<number | null>(null);
  return (
    <section className="relative py-16">
      <Image src={GradImg} alt="img" className="absolute right-0"/>
      <div className="container space-y-12">
        <h2>Upcoming big titles</h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {upcomingGames.map((item, index) => (
            <div key={index} className="space-y-4">
              <div
                onMouseEnter={() => setShow(index)}
                onMouseLeave={() => setShow(null)}
                className="relative w-full h-[327px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.image}
                  alt="img"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className={`absolute inset-x-0 flex justify-center ${
                    show === index ? "bottom-4" : "-bottom-[100%]"
                  } transition-all ease-in-out`}
                >
                  <Button>
                    <FaRegCirclePlay />
                    Watch Teaser
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="text-sm text-muted">{item.types.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
