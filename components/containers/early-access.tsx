"use client";

import BgImg from "@/public/imgs/early-access-bg.png";
import Image from "next/image";
import WaitlistForm from "./form";
import { AnimatedSection, scaleIn } from "../shared/animations";

export default function EarlyAccess() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <AnimatedSection variant={scaleIn} threshold={0.3} className="relative">
          <Image src={BgImg} alt="img" className="max-md:hidden" loading="lazy" draggable={false} />
          <div className="md:absolute inset-0 flex flex-col items-center justify-center text-center gap-4 md:gap-5 lg:gap-8 md:px-8 lg:px-0">
            <h3 className="capitalize text-[28px] md:text-[26px] lg:text-[32px] font-ethnocentric">
              Join the early access
            </h3>
            <p className="font-semibold text-[15px] md:text-[14px] lg:text-[15px] md:max-w-[70%] lg:max-w-none">
              Join the waitlist to access all our games early with exciting
              rewards and benefits
            </p>
            <WaitlistForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
