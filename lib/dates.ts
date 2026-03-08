const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseMonthYear(str: string): Date {
  const [month, year] = str.trim().split(" ");
  return new Date(parseInt(year), MONTHS.indexOf(month), 1);
}

export function yearsFrom(start: Date, end?: Date): number {
  const to = end ?? new Date();
  return Math.floor((to.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}

export function durationFromPeriod(period: string): string {
  const parts = period.split(" \u2013 ");
  const start = parseMonthYear(parts[0]);
  const end = parts[1] === "Present" ? new Date() : parseMonthYear(parts[1]);

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} mo${months !== 1 ? "s" : ""}`;
  if (months === 0) return `${years} yr${years !== 1 ? "s" : ""}`;
  return `${years} yr${years !== 1 ? "s" : ""} ${months} mo${months !== 1 ? "s" : ""}`;
}
