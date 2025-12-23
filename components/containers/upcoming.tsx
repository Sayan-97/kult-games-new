"use client";

import { motion } from "framer-motion";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// Platform Icons Component
const PlatformIcons = ({ web, mobile }: { web?: boolean; mobile?: boolean }) => (
  <div className="flex items-center gap-4">
    {web && (
      <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
        <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
          <MdMonitor />
        </div>
      </div>
    )}
    {mobile && (
      <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] p-[1px] rounded-lg">
        <div className="bg-[#191934] px-4 py-2 rounded-lg flex items-center gap-2">
          <HiOutlineDevicePhoneMobile />
        </div>
      </div>
    )}
  </div>
);

// Video Modal Component
const VideoModal = ({ src, onClose, isMobile }: { src?: string; onClose: () => void; isMobile?: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`bg-black/80 fixed inset-0 z-50 flex items-center justify-center ${isMobile ? 'md:hidden' : 'max-md:hidden'}`}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${isMobile ? 'w-[90%]' : 'w-[60%]'} flex flex-col items-end gap-4`}
    >
      <CgClose onClick={onClose} className="text-2xl cursor-pointer" />
      <video autoPlay loop controls playsInline data-wf-ignore="true" data-object-fit="cover" className={isMobile ? '' : 'w-full'}>
        <source src={src} type="video/mp4" data-wf-ignore="true" />
      </video>
    </motion.div>
  </motion.div>
);

// Game Card Component with hover animation
const GameCard = ({
  item,
  index,
  variant = 'desktop',
  teaserPlay,
  setTeaserPlay,
}: {
  item: typeof upcomingGames[0];
  index: number;
  variant?: 'mobile' | 'desktop';
  teaserPlay: number | null;
  setTeaserPlay: (val: number | null) => void;
}) => {
  const isMobile = variant === 'mobile';
  const imageHeight = isMobile ? 'h-[200px] md:h-[380px]' : 'h-[380px]';
  const badgeClass = isMobile
    ? 'absolute bottom-2 left-0 md:bottom-0 md:left-0 bg-black/70 px-2 py-1 md:px-3 md:py-1.5 rounded-lg'
    : 'absolute bottom-0 left-0 bg-black/70 px-3 py-1.5 rounded-lg';
  const badgeTextClass = isMobile ? 'text-xs md:text-sm font-medium text-white' : 'text-sm font-medium text-white';
  const nameClass = isMobile ? 'md:text-2xl font-bold leading-none truncate' : 'text-2xl font-bold leading-none truncate';
  const typeClass = isMobile ? 'text-xs md:text-sm text-muted whitespace-nowrap truncate' : 'text-sm text-muted whitespace-nowrap truncate';

  return (
    <motion.div
      className="space-y-4"
      variants={staggerItem}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={item.link || "#"} target="_blank" className="block cursor-pointer group">
        <div className={`relative w-full ${imageHeight} overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]`}>
          <Image src={item.image} alt="img" fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" priority draggable={false} />
          <div className={badgeClass}>
            <span className={badgeTextClass}>Coming Soon...</span>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-3">
        <p className={nameClass}>{item.name}</p>
        <p className={typeClass}>{item.types.join(", ")}</p>
        <PlatformIcons web={item.web} mobile={item.mobile} />
        {isMobile && (
          <div className="md:hidden">
            {item.trailer ? (
              <>
                <Button className="w-full" onClick={() => setTeaserPlay(index)}>
                  <FaRegCirclePlay /> Watch Teaser
                </Button>
                {teaserPlay === index && <VideoModal src={item.trailerVid} onClose={() => setTeaserPlay(null)} isMobile />}
              </>
            ) : item.comingSoon ? (
              <Button className="w-full"><FaRegCirclePlay /> Play Game</Button>
            ) : null}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Upcoming() {
  const [teaserPlay, setTeaserPlay] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative py-10 md:py-16 overflow-hidden">
      <Image src={GradImg} alt="img" className="absolute right-0 -z-10" draggable={false} />
      <div className="container space-y-12">
        <div className="flex items-center justify-between">
          <motion.h2
            className="font-ethnocentric"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            Building the future of on-chain gaming
          </motion.h2>
          {upcomingGames.length > 4 && (
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="hidden md:block text-muted hover:text-white transition-colors text-base font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          )}
        </div>

        {/* Mobile Grid View */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {upcomingGames.map((item, index) => (
            <GameCard key={index} item={item} index={index} variant="mobile" teaserPlay={teaserPlay} setTeaserPlay={setTeaserPlay} />
          ))}
        </motion.div>

        {/* Desktop Carousel View */}
        <motion.div
          className={`hidden md:block transition-all duration-500 ease-in-out ${showAll ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <Carousel
            opts={{ loop: upcomingGames.length > 4, align: upcomingGames.length < 4 ? "center" : "start" }}
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent className={upcomingGames.length < 4 ? "justify-center" : ""}>
              {upcomingGames.map((item, index) => (
                <CarouselItem key={index} className={upcomingGames.length <= 3 ? "basis-1/3" : "basis-1/4"}>
                  <GameCard item={item} index={index} teaserPlay={teaserPlay} setTeaserPlay={setTeaserPlay} />
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
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          className={`hidden transition-all duration-500 ease-in-out ${showAll ? 'md:block opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-4 gap-8">
            {upcomingGames.map((item, index) => (
              <GameCard key={index} item={item} index={index} teaserPlay={teaserPlay} setTeaserPlay={setTeaserPlay} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
