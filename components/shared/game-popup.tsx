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
// import bg from "@/public/imgs/bg.png";
// import kultLogo from "@/public/imgs/kult-games-logo.png";
import zeroGpool from '@/public/imgs/zeroGpool.png';
import ZerogPoolLogo from '@/public/imgs/ZerogPoolLogo.png';
// import KultLogo2 from '@/public/imgs/kultLogo2.png';
// import ZeroLog from '@/public/imgs/zerologo.png';
import zeroGKult from '@/public/imgs/zeroGKult.png';
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
       
        <div className="relative w-full flex justify-center max-w-[100%] sm:max-w-[80%]">
          <Image
            src={zeroGpool}
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
          <div className="h-full w-full flex justify-center align-center" style={{position:"absolute"}}>
           <Image src={ZerogPoolLogo} alt="img" className="h-34 m-auto" />
          </div>
          <div style={{justifyContent:'space-between',flexDirection:'column'}} className="p-2 h-full w-full flex lg:pb-8 flex-row justify-center space-between gap-4 z-10 absolute bottom-0 left-0 ">
            <div style={{display:'flex',flexDirection:'row',padding:'10px 10px'}}>
              <Image src={zeroGKult} alt="img" className="w-40"/>
              {/* <span>x</span>
              <Image src={ZeroLog} alt="img" className="w-10 lg:h-6" /> */}
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:"0px 10px"}}>
                <div>
                  <div style={{fontWeight:'bold'}}>
                  Zero G Pool 
                  </div>
                  <p style={{fontSize:"12px"}}>
                  Your favorite 8-ball, now with a cosmic twist.
                  </p>
                </div>
              <Link href="https://Zerogpool.xyz/">
                <Button className="w-33 lg:w-34 h-9 pb-2 outline-none">
                  <p className="text-xs lg:text-sm color-red-302">Launching Soon</p>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
