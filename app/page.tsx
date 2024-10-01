import OurTeams from "@/components/containers/our-teams";
import OurGames from "@/components/containers/our-games";
import Roadmap from "@/components/containers/roadmap";
import Upcoming from "@/components/containers/upcoming";
import OurCommunity from "@/components/containers/community";
import Partners from "@/components/containers/partners";
import EarlyAccess from "@/components/containers/early-access";
import Hero from "@/components/containers/hero";
import KultOffers from "@/components/containers/offers";

export default function Home() {
  return (
    <div>
      <Hero />
      <KultOffers />
      <OurGames />
      <Upcoming />
      <Roadmap />
      <OurTeams />
      <OurCommunity />
      <Partners />
      <EarlyAccess />
    </div>
  );
}
