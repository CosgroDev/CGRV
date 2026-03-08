import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "yellow" | "red";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide leading-none",
        {
          "border border-[#D5D1C9] text-[#7A7870] bg-transparent": variant === "default",
          "border border-[#22c55e] text-[#22c55e] bg-[#22c55e]/10": variant === "green",
          "border border-[#F59E0B] text-[#F59E0B] bg-[#F59E0B]/10": variant === "yellow",
          "border border-[#E63946] text-[#E63946] bg-[#E63946]/10": variant === "red",
        },
        className
      )}
      style={{ fontFamily: '"DM Sans", sans-serif' }}
      {...props}
    />
  );
}

export { Badge };
