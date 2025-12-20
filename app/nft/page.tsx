import React from "react";
import Img from "@/public/imgs/nft-.png";
import Image from "next/image";

export default function NFT() {
  return (
    <div>
      <Image src={Img} alt="img" draggable={false} />
    </div>
  );
}
