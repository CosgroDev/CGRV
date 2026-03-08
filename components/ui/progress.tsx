import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  label?: string;
  className?: string;
  color?: "green" | "yellow" | "red";
}

function Progress({ value, label, className, color = "green" }: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const colorMap = {
    green: "#22c55e",
    yellow: "#F59E0B",
    red: "#E63946",
  };

  const barColor = colorMap[color];

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-1.5">
          <span
            className="text-xs font-semibold uppercase tracking-wide text-[#1C1C1A]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {label}
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: barColor, fontFamily: '"DM Sans", sans-serif' }}
          >
            {clampedValue}%
          </span>
        </div>
      )}
      <div className="h-2 w-full bg-[#EDEBE4] border border-[#D5D1C9]">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${clampedValue}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  );
}

export { Progress };
