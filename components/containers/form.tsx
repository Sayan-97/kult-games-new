"use client";

import { useState, useEffect } from "react";
import Button from "../shared/button";
import constants from "@/constants/constants.json";

const API_URL = constants.API_URL;

interface WaitlistFormProps {
  largeMessage?: boolean;
}

export default function WaitlistForm({ largeMessage = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Auto-dismiss message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/save-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully added to the waitlist!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Unable to connect. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-ethnocentric bg-[rgba(217,217,217,0.06)] backdrop-blur-[11px] w-[280px] md:w-[400px] px-6 py-3 md:py-4 rounded-[63px] placeholder:text-white border-[0.5px] cursor-pointer"
            placeholder="Enter Your email here...."
            name="email"
            disabled={status === "loading"}
          />
          {message && (
            <p className={`font-bold mt-2 ${largeMessage ? "text-base md:text-lg" : "text-sm"} ${status === "success" ? (largeMessage ? "text-green-500" : "text-green-400") : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>
        <Button
          className="font-ethnocentric"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
}
