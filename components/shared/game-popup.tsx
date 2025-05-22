"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import PopupImg from "@/public/imgs/popup.png";
import PopupImg from "@/public/imgs/xtremestuntbg.png";
import Button from "./button";
import Link from "next/link";
import XtremeLogo from "@/public/imgs/xtremelogo.png"
import rageRoadsBg from '@/public/imgs/xtreme-new-image.png';
import roadRagesLogo from '@/public/imgs/rage-roads.png';
import sophandLogo from '@/public/imgs/Sophon_Logo_Main.png';


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
        <div className="relative w-full flex justify-center max-w-[90%]">
          <Image
            src={rageRoadsBg}
            alt="img"
            priority
            className="block max-w-[48rem] rounded-xl"
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute top-1 right-1 w-10 h-10 flex items-center justify-center text-xl font-bold z-20 rounded-full focus:outline-none focus:ring-0 focus-visible:outline-none"
            aria-label="Close"
          >
            ×
          </button>
          <div className="w-full flex flex-row justify-between items-center gap-4 z-10 absolute bottom-0 left-0 ">
            <Image src={roadRagesLogo} alt="img" className="w-22 lg:w-32 " />
            <div className="flex items-center gap-8">
              <Link href="https://mintify.xyz/launchpad/sophonriderspass">
                <Button className="w-24 lg:w-32 h-9 outline-none">
                  <p className="text-xs lg:text-sm">Mint NFT</p>
                </Button>
              </Link>
            </div>
            <Image src={sophandLogo} alt="img" className="w-22 lg:w-32" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
    // <Dialog open={open} onOpenChange={setOpen}>
    //   <DialogContent className="pt-14 max-w-[48rem] bg-background border-none bg-[#04080C]">
    //     <Image
    //       src={rageRoadsBg}
    //       alt="img"
    //       priority
    //       className="block max-md:pt-20 max-w-[48rem]"
    //     />

    //     <div className="absolute top-16 left-10 space-y-4">
    //     <Image src={XtremeLogo} alt="img" className="w-32 lg:w-52" />
    //       <p className="lg:w-[80%] text-xl lg:text-2xl leading-normal lg:leading-normal capitalize font-generalSans">
    //       🏆 Unlock true glory with the Exclusive Pass
    //       </p>
    //       <div className="flex items-center gap-8">
            
    //         <Link href="https://mintify.xyz/launchpad/sophonriderspass">
    //           <Button className="w-24 lg:w-32 h-9 outline-none">
    //             <p className="text-xs lg:text-sm">Mint NFT</p>
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
}
