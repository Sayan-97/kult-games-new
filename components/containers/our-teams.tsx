import Team1 from "@/public/imgs/team1.png";
import Team2 from "@/public/imgs/team2.png";
import Team3 from "@/public/imgs/team3.png";
import Team4 from "@/public/imgs/team4.png";
import Team5 from "@/public/imgs/team5.png";
import Team6 from "@/public/imgs/team6.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function OurTeams() {
  const teams = [
    {
      img: Team1,
      name: "KARN CHAKERVERTY",
      des: "CEO",
    },
    {
      img: Team2,
      name: "Christian Chalfoun",
      des: "Adviser",
    },
    {
      img: Team3,
      name: "MUKESH MOHAPATRA",
      des: "Adviser",
    },
    {
      img: Team4,
      name: "TOPOBAR LAYEK",
      des: "PROJECT LEAD",
    },
    {
      img: Team5,
      name: "SIDHANT MAHATO",
      des: "LEAD GAME DESIGNER",
    },
    {
      img: Team6,
      name: "Ehtisham Ul Haq",
      des: "Blockchain Expert",
    },
  ];

  return (
    <section id="team" className="container space-y-10 py-10 lg:py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2>Our Team</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-20 gap-y-64 pt-44">
        {teams.map((item, index) => (
          <CardContainer key={index} className="w-full">
            <CardBody className="w-full h-auto">
              <div
                className="relative p-3 pt-28 lg:p-8 lg:pt-28 rounded-[30px] flex flex-col items-center space-y-4 border border-[#8C16E9]"
                style={{
                  background:
                    "radial-gradient(172.27% 145.85% at -4.55% -1.7%, rgba(89, 106, 197, 0.30) 0%, rgba(89, 106, 197, 0.00) 100%), #191934",
                }}
              >
                <CardItem translateZ="50" className="absolute bottom-14">
                  <Image src={item.img} alt="img" />
                </CardItem>
                <CardItem translateZ="50">
                  <h5 className="text-2xl uppercase">{item.name}</h5>
                </CardItem>
                <CardItem translateZ="50">
                  <p className="text-lg text-muted uppercase">{item.des}</p>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
