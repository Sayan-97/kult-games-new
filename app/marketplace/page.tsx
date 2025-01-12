import React from "react";
import MarketplaceImg from "@/public/imgs/market-place(NFT).png";
import Image from "next/image";

export default function Marketplace() {
  return (
    <div>
      <Image src={MarketplaceImg} alt="img" />
    </div>
  );
}
