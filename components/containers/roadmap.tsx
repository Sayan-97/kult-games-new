import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { roadmap } from "@/constants";

export default function Roadmap() {
  return (
    <section className="py-16">
      <div className="container space-y-12">
        <h2>Roadmap</h2>
        <Carousel opts={{ dragFree: true }} className="mt-10">
          <div className="w-full h-1 bg-[linear-gradient(90deg,#FFE0FC_2.92%,#E064F7_11.58%,#8C16E9_44.58%)] absolute top-14"></div>
          <CarouselContent className="-ml-8 mt-16">
            {roadmap.map((item, index) => (
              <CarouselItem key={index} className="pl-8 lg:basis-1/4 select-none">
                <div className="relative bg-[linear-gradient(18deg,rgba(48,42,42,0.12)0%,rgba(185,185,185,0.12)100%)] h-[377px] rounded-b-2xl backdrop-blur-[25px]">
                  <div className="relative flex items-center justify-center -top-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="106"
                      height="92"
                      viewBox="0 0 106 92"
                      fill="none"
                    >
                      <path
                        d="M27.024 1.32612L78.5215 1.32612L104.27 45.9243L78.5215 90.5224L27.024 90.5224L1.27526 45.9243L27.024 1.32612Z"
                        fill="black"
                        stroke="url(#paint0_linear_84_599)"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_84_599"
                          x1="0.705103"
                          y1="54.9402"
                          x2="38.7438"
                          y2="33.0152"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE0FC" />
                          <stop offset="0.207908" stopColor="#E064F7" />
                          <stop offset="1" stopColor="#8C16E9" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFE0FC_2.92%,#E064F7_11.58%,#8C16E9_44.58%)]">
                        {item.step}
                      </p>
                      <p className="text-lg text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFE0FC_2.92%,#E064F7_11.58%,#8C16E9_44.58%)]">
                        {item.year}
                      </p>
                    </div>
                  </div>
                  <ul className="ml-4 p-4 space-y-2 list-disc -mt-8">
                    {item.lists.map((list, index) => (
                      <li key={index} className="text-base">
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
