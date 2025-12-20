import React from "react";
import Img from "@/public/imgs/nft-details.png";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image src={Img} alt="img" draggable={false} />
    </div>
  );
}
