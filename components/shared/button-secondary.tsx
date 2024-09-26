import React from "react";

export default function ButtonSecondary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BBA5F4_0%,#5F33D6_50%,#BBA5F4_100%)]" />
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#191934] px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
