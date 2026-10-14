"use client";
export function PrintCVButton() {
  return (
    <button
      className="work-button blue-button no-print"
      onClick={() => window.print()}
    >
      Print / save as PDF ↗
    </button>
  );
}
