import Link from "next/link";
import React from "react";

export default function TopBar() {
  return (
    <div className="bg-[#9F23D0]">
      <div className="container flex items-center gap-2 py-2">
        <div className="bg-green-500 rounded-full w-2 h-2" />
        <p className="font-medium">Bullet Storm Beta testing is live,</p>
        <Link
          href="https://forms.gle/nJJCJTM2D9c5GR2n8"
          target="_blank"
          className="font-bold"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
