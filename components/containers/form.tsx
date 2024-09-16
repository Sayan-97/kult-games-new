"use client";

// import { addEmail } from "@/lib/actions";
// import Button from "./button";
import { useFormStatus } from "react-dom";
import { useState } from "react";
// import ButtonIcon from "@/public/imgs/button-icon.png";
// import ButtonIconS from "@/public/imgs/button-icon-success.png";
import Image from "next/image";
import Button from "../shared/button";

export default function WaitlistForm() {
  const { pending } = useFormStatus();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event: any) => {
    // event.preventDefault();
    // setSubmitting(true);
    // try {
    //   // Call the server action
    //   await addEmail(new FormData(event.target));
    //   setSubmitSuccess(true);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // } finally {
    //   setSubmitting(false);
    // }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6"
    >
      <input
        type="text"
        className="bg-[rgba(217,217,217,0.06)] backdrop-blur-[11px] w-[280px] lg:w-[400px] px-6 max-lg:py-3 rounded-[63px] placeholder:text-white border-[0.5px]"
        placeholder="Enter Your email here...."
        name="email"
      />
      {/* <Button
        type="submit"
        title={
          submitting
            ? "Joining..."
            : submitSuccess
            ? "Success"
            : "Join Waitlist"
        }
      /> */}
      <Button type={`${submitSuccess ? "button" : "submit"}`}>
        {submitting
          ? "Joining..."
          : submitSuccess
          ? "Success"
          : "Join Waitlist"}
        {submitSuccess ? (
          //   <Image src={ButtonIconS} alt="img" className="w-8" />
          <></>
        ) : (
          //   <Image
          //     src={ButtonIcon}
          //     alt="img"
          //     className="w-8 transform group-hover:rotate-45 transition-all ease-in-out"
          //   />
          <></>
        )}
      </Button>
    </form>
  );
}
