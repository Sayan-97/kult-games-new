"use client";

import { upcomingGames } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import Button from "../shared/button";
import { FaRegCirclePlay } from "react-icons/fa6";
import GradImg from "@/public/imgs/offers-grad.png";
import { MdMonitor } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Upcoming() {
  const [show, setShow] = useState<number | null>(null);
  const [teaserPlay, setTeaserPlay] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="relative py-10 md:py-16">
      <Image src={GradImg} alt="img" className="absolute right-0 -z-10" draggable={false} />
      <div className="container space-y-12">
        <div className="flex items-center justify-between">
          <h2>Building the future of on-chain gaming</h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="hidden md:block text-muted hover:text-white transition-colors text-base font-medium"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
        {/* Mobile Grid View */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {upcomingGames.map((item, index) => (
            <div key={index} className="space-y-4">
              <Link
                href={item.link || "#"}
                target="_blank"
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div
                  onMouseEnter={() => setShow(index)}
                  onMouseLeave={() => setShow(null)}
                  className="relative w-full h-[160px] md:h-[327px] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={item.image}
                    alt="img"
                    fill
                    className="object-cover"
                    priority
                    draggable={false}
                  />
                  <div className="absolute bottom-2 left-0 md:bottom-0 md:left-0 bg-black/70 px-2 py-1 md:px-3 md:py-1.5 rounded-lg">
                    <span className="text-xs md:text-sm font-medium text-white">Coming Soon...</span>
                  </div>
                </div>
              </Link>
              <div
                className={`max-md:hidden absolute inset-x-0 flex justify-center ${show === index ? "bottom-4" : "-bottom-[100%]"
                  } transition-all ease-in-out`}
              >
                {item.trailer ? (
                  <>
                    <Button onClick={() => setTeaserPlay(index)}>
                      <FaRegCirclePlay />
                      Watch Teaser
                    </Button>

                    {teaserPlay === index && (
                      <div className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center max-md:hidden">
                        <div className="w-[60%] flex flex-col items-end gap-4">
                          <CgClose
                            onClick={() => setTeaserPlay(null)}
                            className="text-2xl cursor-pointer"
                          />
                          <video
                            autoPlay
                            loop
                            controls
                            playsInline
                            data-wf-ignore="true"
                            data-object-fit="cover"
                            className="w-full"
                          >
                            <source
                              src={item.trailerVid}
                              type="video/mp4"
                              data-wf-ignore="true"
                            />
                          </video>
                        </div>
                      </div>
                    )}
                  </>
                ) : item.comingSoon ? (
                  <Button>
                    <FaRegCirclePlay />
                    Play Game
                  </Button>
                ) //: item.demo ? (
                  //   <Link href={item.demoUrl}>
                  //     <Button>
                  //       <FaRegCirclePlay />
                  //       Play Demo
                  //     </Button>
                  //   </Link>
                  // )
                  : (
                    <></>
                  )}
              </div>
              <div className="flex flex-col gap-3">
                <p className="md:text-2xl font-bold leading-none truncate">
                  {item.name}
                </p>
                <p className="text-xs md:text-sm text-muted whitespace-nowrap truncate">
                  {item.types.join(", ")}
                </p>
                <div className="flex items-center gap-4">
                  {item.web && (
                    <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                      <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                        <MdMonitor />
                      </div>
                    </div>
                  )}
                  {item.mobile && (
                    <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                      <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                        <HiOutlineDevicePhoneMobile />
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:hidden">
                  {item.trailer ? (
                    <>
                      <Button
                        className="w-full"
                        onClick={() => setTeaserPlay(index)}
                      >
                        <FaRegCirclePlay />
                        Watch Teaser
                      </Button>

                      {teaserPlay === index && (
                        <div className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center md:hidden">
                          <div className="w-[90%] flex flex-col items-end gap-4">
                            <CgClose
                              onClick={() => setTeaserPlay(null)}
                              className="text-2xl cursor-pointer"
                            />
                            <video
                              autoPlay
                              loop
                              controls
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                              className=""
                            >
                              <source
                                src={item.trailerVid}
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                          </div>
                        </div>
                      )}
                    </>
                  ) : item.comingSoon ? (
                    <Button className="w-full">
                      <FaRegCirclePlay />
                      Play Game
                    </Button>
                  )
                    // : item.demo ? (
                    //   <Link href={item.demoUrl}>
                    //     <Button className="w-full">
                    //       <FaRegCirclePlay />
                    //       Play Demo
                    //     </Button>
                    //   </Link>
                    // ) 
                    : (
                      <></>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Carousel View - when showAll is false */}
        <div className={`hidden md:block transition-all duration-500 ease-in-out ${showAll ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {upcomingGames.map((item, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <div className="space-y-4">
                    <Link
                      href={item.link || "#"}
                      target="_blank"
                      className="block cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div
                        onMouseEnter={() => setShow(index + 100)}
                        onMouseLeave={() => setShow(null)}
                        className="relative w-full h-[327px] overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={item.image}
                          alt="img"
                          fill
                          className="object-cover"
                          priority
                          draggable={false}
                        />
                        <div className="absolute bottom-0 left-0 bg-black/70 px-3 py-1.5 rounded-lg">
                          <span className="text-sm font-medium text-white">Coming Soon...</span>
                        </div>
                      </div>
                    </Link>
                    <div className="flex flex-col gap-3">
                      <p className="text-2xl font-bold leading-none truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted whitespace-nowrap truncate">
                        {item.types.join(", ")}
                      </p>
                      <div className="flex items-center gap-4">
                        {item.web && (
                          <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                            <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                              <MdMonitor />
                            </div>
                          </div>
                        )}
                        {item.mobile && (
                          <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                            <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                              <HiOutlineDevicePhoneMobile />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {upcomingGames.length > 4 && (
              <>
                <CarouselPrevious className="-left-12 bg-[#191934] border-[#5F33D6] hover:bg-[#191934]/80" />
                <CarouselNext className="-right-12 bg-[#191934] border-[#5F33D6] hover:bg-[#191934]/80" />
              </>
            )}
          </Carousel>
        </div>

        {/* Desktop Grid View - when showAll is true */}
        <div className={`hidden transition-all duration-500 ease-in-out ${showAll ? 'md:block opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="grid grid-cols-4 gap-8">
            {upcomingGames.map((item, index) => (
              <div key={index} className="space-y-4">
                <Link
                  href={item.link || "#"}
                  target="_blank"
                  className="block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div
                    onMouseEnter={() => setShow(index + 200)}
                    onMouseLeave={() => setShow(null)}
                    className="relative w-full h-[327px] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={item.image}
                      alt="img"
                      fill
                      className="object-cover"
                      priority
                      draggable={false}
                    />
                    <div className="absolute bottom-0 left-0 bg-black/70 px-3 py-1.5 rounded-lg">
                      <span className="text-sm font-medium text-white">Coming Soon...</span>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-bold leading-none truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted whitespace-nowrap truncate">
                    {item.types.join(", ")}
                  </p>
                  <div className="flex items-center gap-4">
                    {item.web && (
                      <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                        <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                          <MdMonitor />
                        </div>
                      </div>
                    )}
                    {item.mobile && (
                      <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
                        <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
                          <HiOutlineDevicePhoneMobile />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
