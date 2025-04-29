"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import PopupImg from "@/public/imgs/popup.png";
import PopupImg from "@/public/imgs/xtremestuntbg.png";
import Button from "./button";
import Link from "next/link";
import XtremeLogo from "@/public/imgs/xtremelogo.png"

export default function GamePopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000); // Delay for 3 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []); // Empty dependency array to run only once
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="pt-14 max-w-[48rem] bg-background border-none bg-[#04080C]">
        <Image
          src={PopupImg}
          alt="img"
          priority
          className="block max-md:pt-20"
        />

        <div className="absolute top-16 left-10 space-y-4">
        <Image src={XtremeLogo} alt="img" className="w-32 lg:w-52" />
          <p className="lg:w-[80%] text-xl lg:text-2xl leading-normal lg:leading-normal capitalize font-generalSans">
          🏆 Unlock true glory with the Exclusive Pass
          </p>
          <div className="flex items-center gap-8">
            <Link href="/">
              <Button className="w-24 lg:w-32 h-9 outline-none">
                <p className="text-xs lg:text-sm">Mint NFT</p>
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
