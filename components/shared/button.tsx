"use client";

import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `gradient-button px-4 lg:px-6 py-2 text-sm lg:text-lg font-medium flex items-center justify-center gap-2 rounded-full overflow-hidden ${className}`,
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
