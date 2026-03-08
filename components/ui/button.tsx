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
          "inline-flex items-center justify-center font-pixel cursor-pointer",
          "border-2 transition-all duration-100 active:translate-x-1 active:translate-y-1",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0",
          {
            // Variants
            "bg-primary text-background border-primary hover:bg-primary-dark active:shadow-none":
              variant === "primary",
            "bg-transparent text-secondary border-secondary hover:bg-secondary/10 active:shadow-none":
              variant === "secondary",
            "bg-transparent text-foreground border-border hover:border-primary hover:text-primary active:shadow-none":
              variant === "ghost",
            "bg-transparent text-red-400 border-red-400 hover:bg-red-400/10 active:shadow-none":
              variant === "danger",
            // Sizes
            "text-[8px] px-3 py-2": size === "sm",
            "text-[10px] px-4 py-3": size === "md",
            "text-[12px] px-6 py-4": size === "lg",
          },
          // Shadow based on variant
          variant === "primary" && "shadow-[4px_4px_0_#16a34a]",
          variant === "secondary" && "shadow-[4px_4px_0_#b45309]",
          variant === "ghost" && "shadow-[4px_4px_0_#333]",
          variant === "danger" && "shadow-[4px_4px_0_#b91c1c]",
          className
        )}
        style={{
          fontFamily: '"Press Start 2P", monospace',
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
