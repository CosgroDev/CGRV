import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          background: "#2446ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px",
        }}
      >
        <span
          style={{
            color: "#f2ebdd",
            fontSize: "22px",
            fontWeight: 900,
            fontFamily: "sans-serif",
            lineHeight: 1,
            letterSpacing: "-1px",
            marginTop: "1px",
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size },
  );
}
