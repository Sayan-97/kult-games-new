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
          <Image src={BgImg} alt="img" className="max-md:hidden" priority draggable={false} />
          <div className="md:absolute inset-0 flex flex-col items-center justify-center text-center gap-8">
            <h3 className="capitalize text-[32px] font-ethnocentric">
              Join the early access
            </h3>
            <p className="font-semibold text-[15px]">
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
