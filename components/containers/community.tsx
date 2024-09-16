import Image from "next/image";
import DiscordImg from "@/public/imgs/discord-image.png";
import TelegramImg from "@/public/imgs/telegram-icon.png";
import InstagramImg from "@/public/imgs/instagram-icon.png";
import AnnouncementImg from "@/public/imgs/announcement-icon.png";
import TwitterImg from "@/public/imgs/twitter-img-2.png";
import Button from "../shared/button";

export default function OurCommunity() {
  return (
    <section className="py-16">
      <div className="container space-y-12">
        <h2>Join our community</h2>
        <div className="w-full max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] flex gap-4 rounded-2xl overflow-hidden">
              <div className="p-4 space-y-4">
                <h5 className="text-[27px] font-bold">Discord Community</h5>
                <p>Explore an ultimate marketplace designed for gamers.</p>
              </div>
              <Image
                src={DiscordImg}
                alt="DiscordImg"
                width={266}
                height={256}
              />
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-6">
              <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                <Image src={TelegramImg} alt="img" />
                <p className="text-sm lg:text-base">Telegram</p>
              </div>
              <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                <Image src={InstagramImg} alt="img" />
                <p className="text-sm lg:text-base">Instagram</p>
              </div>
              <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                <Image src={AnnouncementImg} alt="img" />
                <p className="text-sm lg:text-base">Announcement</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl max-lg:space-y-4 bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row items-start lg:items-end max-lg:gap-4 justify-between">
              <div className="lg:w-2/3 space-y-5">
                <h5 className="text-[27px] font-bold">Follow us on Twitter</h5>
                <p>
                  Follow us on twitter to get latest updates and announcements
                </p>
              </div>
              <Button>Follow Now</Button>
            </div>
            <Image src={TwitterImg} alt="img" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
