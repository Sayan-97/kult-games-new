"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import PopupImg from "@/public/imgs/popup.png";
// import PopupImg from "@/public/imgs/xtremestuntbg.png";
import Button from "./button";
import Link from "next/link";
// import XtremeLogo from "@/public/imgs/xtremelogo.png"
// import rageRoadsBg from '@/public/imgs/xtreme-new-image.png';
import bg from "@/public/imgs/bg.png";
import kultLogo from "@/public/imgs/kult-games-logo.png";
// import roadRagesLogo from '@/public/imgs/rage-roads.png';
// import sophandLogo from '@/public/imgs/Sophon_Logo_Main.png';

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
      <DialogContent className="pt-0 max-w-[48rem] border-none flex flex-col items-center justify-center bg-transparent shadow-none [&>button.absolute]:hidden">
        <div className="relative w-full flex justify-center max-w-[80%] sm:max-w-[99%]">
          <Image
            src={bg}
            alt="img"
            priority
            className="block lg:max-w-[36rem] sm:max-w-[42rem] rounded-xl min-h-[200px] "
          />

          <button
            onClick={() => setOpen(false)}
            className="absolute top-1 right-1 w-10 h-10 flex items-center justify-center text-xl font-bold z-20 rounded-full focus:outline-none focus:ring-0 focus-visible:outline-none"
            aria-label="Close"
          >
            ×
          </button>
          <div className="w-full flex lg:pb-8 flex-row justify-center items-center gap-4 z-10 absolute bottom-0 left-0 ">
            <Image src={kultLogo} alt="img" className="w-8 lg:w-16" />
            <div className="flex items-center gap-8 pb-1 sm:">
              <Link href="https://highwayhustle.xyz/">
                <Button className="w-33 lg:w-34 h-9 pb-2 outline-none">
                  <p className="text-xs lg:text-sm color-red-302">Play Games</p>
                </Button>
              </Link>
            </div>
            {/* <div className="flex items-center gap-8">
              <Link href="https://app.mintify.com/launchpad/morphspeedlegends">
                <Button className="w-33 lg:w-34 h-9 outline-none">
                  <p className="text-xs lg:text-sm color-red-302">Mint NFT</p>
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
