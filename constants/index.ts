import Game1Img from "@/public/imgs/game1.png";
import Game2Img from "@/public/imgs/game2.png";
import Game3Img from "@/public/imgs/game3.png";
import Game4Img from "@/public/imgs/game4.png";

import BNBImg from "@/public/imgs/bnb.png";
import BotanixImg from "@/public/imgs/botanix.png";
import TroveImg from "@/public/imgs/trove.png";

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
    name: "Cybernetic Commando",
    des: "Explore an ultimate marketplace designed for gamers.",
    plat: BNBImg,
    mobile: true,
    web: true,
    link: "https://cybernetic.kult.games/",
  },
  {
    image: Game2Img,
    name: "Satoshi Heads",
    des: "Explore an ultimate head soccer experience in Web 3",
    plat: BotanixImg,
    mobile: true,
    web: true,
    link: "https://satoshiheads.kult.games/",
  },
  {
    image: Game3Img,
    name: "Cuddle Quest",
    des: "Explore an ultimate tickle to earn concept with cute furry animals",
    plat: TroveImg,
    mobile: true,
    web: true,
    link: "https://anny.kult.games/",
  },
  {
    image: Game4Img,
    name: "Scary Run",
    des: "Experience an thrilling adventure escaping obstacles and ghosts on the way",
    plat: TroveImg,
    mobile: true,
    web: true,
    link: "https://scaryrun.kult.games/",
  },
];

export const upcomingGames = [
  {
    image: UpcomingGameImg1,
    name: "Bloodline Chronicles",
    types: ["Action", "RPG"],
    mobile: true,
    web: true,
  },
  {
    image: UpcomingGameImg2,
    name: "Formula Speed Thrills",
    types: ["Racing", "Formula 1"],
    mobile: false,
    web: true,
  },
  {
    image: UpcomingGameImg3,
    name: "Live2Drive",
    types: ["Action", "RPG"],
    mobile: true,
    web: false,
  },
  {
    image: UpcomingGameImg4,
    name: "Camel Run",
    types: ["Action", "RPG"],
    mobile: true,
    web: true,
  },
  {
    image: UpcomingGameImg5,
    name: "Skale Wolf",
    types: ["Action", "RPG"],
    mobile: true,
    web: true,
  },
  {
    image: UpcomingGameImg6,
    name: "Zeus Treasures",
    types: ["Action", "RPG"],
    mobile: true,
    web: true,
  },
  {
    image: UpcomingGameImg7,
    name: "Octavium",
    types: ["Action", "RPG"],
    mobile: false,
    web: true,
  },
  {
    image: UpcomingGameImg8,
    name: "TREX Mines",
    types: ["Action", "RPG"],
    mobile: true,
    web: true,
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
