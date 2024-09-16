import React from "react";
import OffersImg from "@/public/imgs/offers-img.png";
import OffersImgSm1 from "@/public/imgs/offers-img-sm-1.png";
import OffersImgSm2 from "@/public/imgs/offers-img-sm-2.png";
import KultLogo from "@/public/imgs/Kult-Emblem-Variation.png";
import Image from "next/image";

export default function KultOffers() {
  return (
    <section className="py-16">
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
        </div>
      </div>
    </section>
  );
}
