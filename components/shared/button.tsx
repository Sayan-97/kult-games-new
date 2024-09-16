"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
      <div className="bg-[radial-gradient(66.67%_103.95%_at_50%_-42.76%,#BBA5F4_0%,#5F33D6_100%)] px-6 py-2 text-base lg:text-lg font-medium flex items-center gap-2">
        {children}
      </div>
    </button>
  );
}
