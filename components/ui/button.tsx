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
          "inline-flex items-center justify-center font-semibold cursor-pointer uppercase tracking-widest",
          "border-2 transition-all duration-150",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          {
            "bg-[#1C1C1A] text-white border-[#1C1C1A] hover:bg-[#22c55e] hover:border-[#22c55e]":
              variant === "primary",
            "bg-transparent text-[#1C1C1A] border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white":
              variant === "secondary",
            "bg-transparent text-[#7A7870] border-[#D5D1C9] hover:border-[#1C1C1A] hover:text-[#1C1C1A]":
              variant === "ghost",
            "bg-transparent text-[#E63946] border-[#E63946] hover:bg-[#E63946] hover:text-white":
              variant === "danger",
            "text-[11px] px-3 py-2": size === "sm",
            "text-xs px-5 py-3": size === "md",
            "text-sm px-7 py-4": size === "lg",
          },
          className
        )}
        style={{ fontFamily: '"DM Sans", sans-serif' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
