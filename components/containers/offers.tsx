"use client";

import React, { useState } from "react";
import OffersImg from "@/public/imgs/offers-img.png";
import OffersImgSm1 from "@/public/imgs/offers-img-sm-1.png";
import OffersImgSm2 from "@/public/imgs/offers-img-sm-2.png";
import KultLogo from "@/public/imgs/Kult-Emblem-Variation.png";
import Image from "next/image";
import OffersGrad from "@/public/imgs/offers-grad.png";
import Button from "../shared/button";
import { SlArrowRightCircle } from "react-icons/sl";
import { Cross } from "lucide-react";
import { CgClose } from "react-icons/cg";

export default function KultOffers() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-10 lg:py-16">
      <div className="container space-y-12">
        <h2 className="text-center">Kult Offers</h2>
        <div className="relative flex items-center justify-center max-lg:hidden">
          <Image
            src={OffersImg}
            alt="img"
            width={1240}
            height={912.54}
            className=""
            priority
          />
          <Image
            src={KultLogo}
            alt="img"
            className="absolute animate-spin"
            priority
          />
          <Button
            onClick={() => setOpen(true)}
            className="absolute left-16 bottom-16 py-3"
          >
            <SlArrowRightCircle />
            Discover Kult
          </Button>

          {open && (
            <div className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center max-lg:hidden">
              <div className="w-[60%] flex flex-col items-end gap-4">
                <CgClose
                  onClick={() => setOpen(false)}
                  className="text-2xl cursor-pointer"
                />
                <video
                  autoPlay
                  loop
                  controls
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                  className=""
                >
                  <source
                    src="/videos/Kultfinalvfx.mp4"
                    type="video/mp4"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
          )}
        </div>

        <div className="lg:hidden space-y-5">
          <div className="relative flex items-center justify-center">
            <Image src={OffersImgSm1} alt="img" priority />
            <Image
              src={KultLogo}
              alt="img"
              className="w-[50%] absolute animate-spin"
              priority
            />
          </div>
          <Image src={OffersImgSm2} alt="img" priority />

          <Button
            onClick={() => setOpen(true)}
            className="absolute right-10 bottom-[110px] py-3"
          >
            <SlArrowRightCircle />
            Discover Kult
          </Button>

          {open && (
            <div className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center lg:hidden">
              <div className="w-[90%] flex flex-col items-end gap-4">
                <CgClose
                  onClick={() => setOpen(false)}
                  className="text-2xl cursor-pointer"
                />
                <video
                  autoPlay
                  loop
                  controls
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                  className=""
                >
                  <source
                    src="/videos/Kultfinalvfx.mp4"
                    type="video/mp4"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
      <Image
        src={OffersGrad}
        alt="img"
        className="absolute right-0 -bottom-80 -z-10"
      />
    </section>
  );
}
