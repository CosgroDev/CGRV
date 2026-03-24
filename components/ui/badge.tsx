import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "yellow" | "red";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-1 text-[11px] font-semibold uppercase tracking-wider leading-none rounded-sm",
        {
          "bg-[#f4f4f4] text-[#555555]": variant === "default" || variant === "yellow",
          "bg-[#e8f0ea] text-[#1e4d2b]": variant === "green",
          "bg-[#fdf0ee] text-[#c0392b]": variant === "red",
        },
        className
      )}
      style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
      {...props}
    />
  );
}

export { Badge };
