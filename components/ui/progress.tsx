import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  label?: string;
  className?: string;
  color?: "green" | "yellow" | "red";
}

function Progress({ value, label, className, color = "green" }: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const blocks = Math.round(clampedValue / 10);

  const colorMap = {
    green: "#22c55e",
    yellow: "#fbbf24",
    red: "#f87171",
  };

  const barColor = colorMap[color];

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span
            className="text-[8px] text-[#f0f0f0]"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            {label}
          </span>
          <span
            className="text-[8px]"
            style={{ color: barColor, fontFamily: '"Press Start 2P", monospace' }}
          >
            {clampedValue}%
          </span>
        </div>
      )}
      <div className="flex gap-1 border-2 border-[#333333] p-1 bg-[#0a0a0a]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-3 flex-1 transition-all"
            style={{
              backgroundColor: i < blocks ? barColor : "#222222",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export { Progress };
