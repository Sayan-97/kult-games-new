import Button from "../shared/button";

export default function WaitlistForm() {
  return (
    <form
      className="flex flex-col md:flex-row items-center md:items-stretch gap-6"
    >
      <input
        type="text"
        className="font-ethnocentric bg-[rgba(217,217,217,0.06)] backdrop-blur-[11px] w-[280px] md:w-[400px] px-6 max-md:py-3 rounded-[63px] placeholder:text-white border-[0.5px] cursor-pointer"
        placeholder="Enter Your email here...."
        name="email"
      />
      <Button className="font-ethnocentric">
        Join Waitlist
      </Button>
    </form>
  );
}
