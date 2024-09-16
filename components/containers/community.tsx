import Image from "next/image";
import DiscordImg from "@/public/imgs/discord-image.png";
import TelegramImg from "@/public/imgs/telegram-icon.png";
import InstagramImg from "@/public/imgs/instagram-icon.png";
import AnnouncementImg from "@/public/imgs/announcement-icon.png";

export default function OurCommunity() {
  return (
    <section className="py-16">
      <div className="container space-y-12">
        <h2>Join our community</h2>
        <div className="w-full grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] flex gap-4 rounded-2xl overflow-hidden">
              <div className="p-4">
                <h4>Discord Community</h4>
                <p>Explore an ultimate marketplace designed for gamers.</p>
              </div>
              <Image
                src={DiscordImg}
                alt="DiscordImg"
                width={266}
                height={256}
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                <Image src={TelegramImg} alt="img" />
                <p>Telegram</p>
              </div>
              <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                <Image src={InstagramImg} alt="img" />
                <p>Instagram</p>
              </div>
              <div className="bg-[radial-gradient(172.27%_145.85%_at_-4.55%_-1.7%,rgba(89,106,197,0.30)0%,rgba(89,106,197,0.00)100%)] p-4 rounded-2xl flex flex-col items-center justify-between gap-2">
                <Image src={AnnouncementImg} alt="img" />
                Announcement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
