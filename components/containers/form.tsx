import Button from "../shared/button";

export default function WaitlistForm() {
  return (
    <form
      className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6"
    >
      <input
        type="text"
        className="bg-[rgba(217,217,217,0.06)] backdrop-blur-[11px] w-[280px] lg:w-[400px] px-6 max-lg:py-3 rounded-[63px] placeholder:text-white border-[0.5px]"
        placeholder="Enter Your email here...."
        name="email"
      />
      <Button>
        Join Waitlist
      </Button>
    </form>
  );
}
