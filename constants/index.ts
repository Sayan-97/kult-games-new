import Game1Img from "@/public/imgs/game1.png";
import Game2Img from "@/public/imgs/game2.png";
import Game3Img from "@/public/imgs/game3.png";
import Game4Img from "@/public/imgs/game4.png";

// import BNBImg from "@/public/imgs/bnb.png";
import BotanixImg from "@/public/imgs/botanix.png";
import TroveImg from "@/public/imgs/trove.png";
import OGImg from "@/public/imgs/OG.png";

import UpcomingGameImg1 from "@/public/imgs/upcoming1.png";
import UpcomingGameImg2 from "@/public/imgs/upcoming2.png";
import UpcomingGameImg3 from "@/public/imgs/upcoming3.png";
import UpcomingGameImg4 from "@/public/imgs/upcoming4.png";
import UpcomingGameImg5 from "@/public/imgs/upcoming5.png";
import UpcomingGameImg6 from "@/public/imgs/upcoming6.png";
import UpcomingGameImg7 from "@/public/imgs/upcoming7.png";
import UpcomingGameImg8 from "@/public/imgs/upcoming8.png";

export const games = [
  {
    image: Game1Img,
    name: "Zero G Pool",
    des: "Your favorite 8-ball, now with a cosmic twist.",
    plat: TroveImg,
    mobile: true,
    web: true,
    link: "https://zerogpool.xyz/",
  },
  {
    image: Game2Img,
    name: "Guess The AI",
    des: "Challenge your mind, Beat the AI",
    plat: TroveImg,
    mobile: true,
    web: true,
    link: "https://guesstheai.xyz/",
  },
  {
    image: Game3Img,
    name: "Warzone Warriors",
    des: "Enter the war,prove your skill. Show what you're made of",
    plat: TroveImg,
    mobile: true,
    web: true,
    link: "https://warzonewarriors.xyz/",
  },
  {
    image: Game4Img,
    name: "Highway Hustle",
    des: "Race through chaos, dodge traffic, and own the streets",
    plat: TroveImg,
    mobile: true,
    web: true,
    link: "https://highwayhustle.xyz/",
  },
];

export const upcomingGames = [

  {
    image: UpcomingGameImg6,
    name: "Zero Dash",
    types: ["Run", "Escape", "Don't Look Back"],
    mobile: true,
    web: true,
    demo: false,
  },
  {
    image: UpcomingGameImg1,
    name: "Robo War",
    types: ["Action", "AAA", "RPG"],
    mobile: true,
    web: true,
    trailer: false,
    trailerVid: "/videos/bloodline.mp4",
  },

  {
    image: UpcomingGameImg2,
    name: "The Last Shot",
    types: ["Action", "AAA", "RPG"],
    mobile: true,
    web: true,
    trailer: false,
    trailerVid: "/videos/f1 x.mp4",
  },
  {
    image: UpcomingGameImg3,
    name: "Highway Hustle",
    types: ["P2E", "Racing"],
    mobile: true,
    web: true,
    trailer: false,
    trailerVid: "/videos/L2d Trailer 4K.mp4",
  },
  {
    image: UpcomingGameImg4,
    name: "Formula Speed Thrills",
    types: ["Racing", "Formula 1"],
    mobile: true,
    web: true,
    comingSoon: false,
  },
];

export const roadmap = [
  {
    step: "Q1",
    year: "2024",
    lists: [
      "Launch the KULT Games platform.",
      "Release the first set of blockchain-integrated games.",
      "Minting unique in-game NFTs",
      "On-chain NFT Utilities and NFT trading Gaming Marketplace",
      "Alpha stage Partnerships with multiple blockchains",
    ],
  },
  {
    step: "Q2",
    year: "2024",
    lists: [
      "Full Launch of Gaming Marketplace.",
      "Permissionless trading for in-game assets and NFTs.",
      "Launch additional game titles with full-scale NFT integration.",
      "Enhancements to the gaming UI/UX based on user feedback.",
      "Special NFT drops for early adopters.",
    ],
  },
  {
    step: "Q3",
    year: "2024",
    lists: [
      "Further integration with popular blockchains.",
      "Achieve full interoperability in the Kult Ecosystem.",
      "Security and Infrastructure Upgrade.",
      "Major AAA game release",
      "Host a virtual launch event with prizes and exclusive NFT releases.",
    ],
  },
  {
    step: "Q1",
    year: "2025",
    lists: [
      "System upgrades and enhanced platform features based on Q4 feedback.",
      "Increase server capacities to handle a growing player base.",
      "Mobile platform integration.",
      "Strategic partnerships and expansion.",
      "Partnerships with gaming studios.",
    ],
  },
];
