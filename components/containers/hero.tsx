import WaitlistForm from "./form";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen rounded-b-[64px] overflow-hidden flex items-end">
      <video
        autoPlay
        muted
        loop
        playsInline
        data-wf-ignore="true"
        data-object-fit="cover"
        className="absolute w-full h-screen object-cover -z-20 rounded-b-[64px]"
      >
        <source
          src="/videos/hero render.mp4"
          type="video/mp4"
          data-wf-ignore="true"
        />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,25,0.00)_30%,rgba(84,22,233,0.71)100%)] lg:bg-[linear-gradient(180deg,rgba(4,7,25,0.00)42.87%,rgba(84,22,233,0.71)100%)] -z-10"></div>
      <div className="container lg:w-[80%] flex flex-col items-center gap-6 text-center py-20">
        <h1 className="text-[57px] font-bold">
          ECOSYSTEM FOR GAMERS BY GAMERS
        </h1>
        <p className="lg:text-lg lg:px-32">
          Kult Games is leading a revolution in the gaming industry by
          introducing a visionary Play & Earn & Engage ecosystem that integrates
          Socialfi and multichain interoperability.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
