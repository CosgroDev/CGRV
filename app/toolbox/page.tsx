import { Toolbox } from "@/components/workshop/toolbox";
export const metadata = {
  title: "Toolbox | CGRV",
  description:
    "Clean and compare lists, validate and format JSON. Free browser-based tools.",
};
export default function ToolboxPage() {
  return (
    <div className="wrap section">
      <div className="page-heading">
        <p className="eyebrow">USEFUL THINGS / OPEN TO EVERYONE</p>
        <h1>
          The toolbox<span className="orange">.</span>
        </h1>
        <p>
          Small utilities for the repetitive bits. Your inputs are processed in
          this browser and aren’t saved or sent to a server by these tools.
        </p>
      </div>
      <Toolbox />
    </div>
  );
}
