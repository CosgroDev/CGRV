import { ImageResponse } from "next/og";
export const alt = "CGRV / Dale Cosgrove / Curious mind. Practical things.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f2ebdd",
          color: "#181818",
          padding: "50px 70px",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "12px solid #181818",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <span>CGRV ↗</span>
          <span>DALE COSGROVE / BARNSLEY, UK</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 94,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -4,
          }}
        >
          <span>Curious mind.</span>
          <span style={{ color: "#2446ff" }}>Practical things.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            borderTop: "3px solid #181818",
            paddingTop: 20,
            justifyContent: "space-between",
          }}
        >
          <span>QUALITY / DATA / TOOLS / EXPERIMENTS</span>
          <span>cgrv.co.uk</span>
        </div>
      </div>
    ),
    size,
  );
}
