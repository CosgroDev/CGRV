import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "green" | "yellow";
}

function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white p-6",
        variant === "default" && "border-2 border-[#1C1C1A]",
        variant === "green" && "border-2 border-[#22c55e]",
        variant === "yellow" && "border-2 border-[#F59E0B]",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-[#1C1C1A] font-bold text-sm leading-snug mb-2 uppercase tracking-wide",
        className
      )}
      style={{ fontFamily: '"Syne", sans-serif' }}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[#7A7870] text-sm leading-relaxed", className)}
      style={{ fontFamily: '"DM Sans", sans-serif' }}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 flex items-center gap-3", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
