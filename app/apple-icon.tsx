import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          background: "#1C1C1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24px",
        }}
      >
        <span
          style={{
            color: "#22c55e",
            fontSize: "128px",
            fontWeight: 900,
            fontFamily: "sans-serif",
            lineHeight: 1,
            letterSpacing: "-4px",
            marginTop: "6px",
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size }
  );
}
