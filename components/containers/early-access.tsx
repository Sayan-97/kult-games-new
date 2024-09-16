import BgImg from "@/public/imgs/early-access-bg.png";
import Image from "next/image";
import WaitlistForm from "./form";

export default function EarlyAccess() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="relative">
          <Image src={BgImg} alt="img" className="max-lg:hidden" priority/>
          <div className="lg:absolute inset-0 flex flex-col items-center justify-center text-center gap-8">
            <h3 className="capitalize text-[32px] font-bold">
              Join the early access
            </h3>
            <p>
              Join the waitlist to access all our games early with exciting
              rewards and benefits
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
