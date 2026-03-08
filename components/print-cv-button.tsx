"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function PrintCVButton() {
  return (
    <Button
      variant="primary"
      size="sm"
      className="w-full sm:w-auto"
      onClick={() => window.print()}
    >
      <Download size={12} className="mr-2" />
      Save as PDF
    </Button>
  );
}
