import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold cursor-pointer uppercase tracking-wider",
          "border transition-all duration-150",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          {
            "bg-[#1e4d2b] text-white border-[#1e4d2b] hover:bg-[#163820] hover:border-[#163820]":
              variant === "primary",
            "bg-transparent text-[#1e4d2b] border-[#1e4d2b] hover:bg-[#1e4d2b] hover:text-white":
              variant === "secondary",
            "bg-transparent text-[#111111] border-[#e0e0e0] hover:border-[#111111] hover:text-[#111111]":
              variant === "ghost",
            "bg-transparent text-[#c0392b] border-[#c0392b] hover:bg-[#c0392b] hover:text-white":
              variant === "danger",
            "text-[11px] px-3 py-2 rounded-sm": size === "sm",
            "text-xs px-5 py-3 rounded-sm": size === "md",
            "text-sm px-7 py-4 rounded-sm": size === "lg",
          },
          className
        )}
        style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
