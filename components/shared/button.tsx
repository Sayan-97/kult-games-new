"use client";

import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] px-4 lg:px-6 py-2 text-sm lg:text-lg font-medium flex items-center justify-center gap-2 rounded-full overflow-hidden ${className}`
      )}
    >
      {children}
    </button>
  );
}
