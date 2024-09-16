import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { games } from "@/constants";
import Image from "next/image";
import Button from "../shared/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiGlobe, CiMobile1 } from "react-icons/ci";

export default function OurGames() {
  return (
    <section className="py-16">
      <div className="container space-y-12">
        <h2>Experience our games</h2>
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="-ml-8">
            {games.map((item, index) => (
              <CarouselItem key={index} className="pl-8 w-full">
                <div className="flex flex-col lg:flex-row items-stretch gap-8">
                  <div className="relative lg:w-2/3 h-[279px] lg:h-[579px] rounded-3xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt="img"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow flex flex-col gap-8">
                    <div className="relative h-[240px] bg-[#191934] flex-grow rounded-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(217.24%_242.87%_at_217.75%_107.58%,rgba(127,139,210,0.30)0%,rgba(89,106,197,0.00)100%)] p-6 flex flex-col justify-between items-start">
                        <div className="space-y-6">
                          <p className="text-[27px] font-bold">{item.name}</p>
                          <p className="text-muted">{item.des}</p>
                          <Image src={item.plat} alt="alt" />
                        </div>
                        <Button>
                          <FaRegCirclePlay />
                          Play Demo
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-[166px] bg-[#191934] rounded-2xl max-lg:hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(383.94%_338.14%_at_213.36%_-151.22%,rgba(127,139,210,0.30)0%,rgba(89,106,197,0.00)100%)] p-6 flex flex-col justify-between">
                        <p className="text-[27px] font-bold">Platform</p>
                        <div className="flex items-center gap-4">
                          <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-full">
                            <div className="bg-[#191934] px-4 py-1 rounded-full flex items-center gap-2">
                              <CiGlobe /> Web
                            </div>
                          </div>
                          <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-full">
                            <div className="bg-[#191934] px-4 py-1 rounded-full flex items-center gap-2">
                              <CiMobile1 /> Mobile
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
