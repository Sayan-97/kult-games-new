"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PopupImg from "@/public/imgs/popup.png";

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
      <DialogContent className="pt-14 max-w-[48rem] bg-background border-none">
        <Image
          src={PopupImg}
          alt="img"
          priority
          className="block "
        />
      </DialogContent>
    </Dialog>
  );
}
