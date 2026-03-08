import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "yellow" | "red";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-1 text-[8px] border-2 leading-none",
        {
          "border-[#333333] text-[#888888] bg-transparent": variant === "default",
          "border-[#22c55e] text-[#22c55e] bg-[#22c55e]/10": variant === "green",
          "border-[#fbbf24] text-[#fbbf24] bg-[#fbbf24]/10": variant === "yellow",
          "border-red-400 text-red-400 bg-red-400/10": variant === "red",
        },
        className
      )}
      style={{ fontFamily: '"Press Start 2P", monospace' }}
      {...props}
    />
  );
}

export { Badge };
