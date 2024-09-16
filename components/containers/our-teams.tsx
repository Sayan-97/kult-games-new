import Team1 from "@/public/imgs/team1.png";
import Team2 from "@/public/imgs/team2.png";
import Team3 from "@/public/imgs/team3.png";
import Team4 from "@/public/imgs/team4.png";
import Team5 from "@/public/imgs/team5.png";
import Team6 from "@/public/imgs/team6.png";
import Image from "next/image";

export default function OurTeams() {
  return (
    <section id="team" className="container space-y-10 py-10 lg:py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2>Our Team</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <Image src={Team1} alt="img" width={365} height={450} priority />
          <Image src={Team2} alt="img" width={365} height={450} priority />
          <Image src={Team3} alt="img" width={365} height={450} priority />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <Image src={Team4} alt="img" width={365} height={450} priority />
          <Image src={Team5} alt="img" width={365} height={450} priority />
          <Image src={Team6} alt="img" width={365} height={450} priority />
        </div>
      </div>
    </section>
  );
}
