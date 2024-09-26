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
        `gradient-button px-4 lg:px-6 py-2 text-sm lg:text-lg font-medium flex items-center justify-center gap-2 rounded-full overflow-hidden ${className}`
      )}
    >
      {children}
    </button>
  );
}
