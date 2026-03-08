import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dale Cosgrove — Food Safety Professional & Tech Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((r) => r.text());

  const fontUrl = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1];
  const fontData = fontUrl
    ? await fetch(fontUrl).then((r) => r.arrayBuffer())
    : null;

  const fonts = fontData
    ? [{ name: "Syne", data: fontData, style: "normal" as const, weight: 800 as const }]
    : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#F6F4EF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 80px 48px",
          fontFamily: fontData ? "Syne" : "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#22c55e",
            display: "flex",
          }}
        />

        {/* Bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#1C1C1A",
            display: "flex",
          }}
        />

        {/* Top section: category label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "3px",
              background: "#1C1C1A",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#7A7870",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Quality · Food Safety · Supply Chain · Tech
          </span>
        </div>

        {/* Middle section: name + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* DALE COSGROVE */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "122px",
                fontWeight: 800,
                color: "#1C1C1A",
                lineHeight: 0.88,
                letterSpacing: "-3px",
                display: "flex",
              }}
            >
              DALE
            </div>
            <div
              style={{
                fontSize: "122px",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-3px",
                display: "flex",
              }}
            >
              <span style={{ color: "#22c55e" }}>C</span>
              <span style={{ color: "#E63946" }}>O</span>
              <span style={{ color: "#1C1C1A" }}>S</span>
              <span style={{ color: "#2E3A8C" }}>G</span>
              <span style={{ color: "#1C1C1A" }}>R</span>
              <span style={{ color: "#F59E0B" }}>O</span>
              <span style={{ color: "#1C1C1A" }}>V</span>
              <span style={{ color: "#22c55e" }}>E</span>
            </div>
          </div>

          {/* Headline — visually distinct, high contrast */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: "0px",
              background: "#1C1C1A",
              alignSelf: "flex-start",
              padding: "10px 20px 10px 16px",
            }}
          >
            <div
              style={{
                width: "5px",
                background: "#22c55e",
                marginRight: "14px",
                display: "flex",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "#F6F4EF",
                letterSpacing: "-0.3px",
              }}
            >
              Food Safety Professional &amp; Tech Enthusiast
            </span>
          </div>
        </div>

        {/* Bottom section: CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#22c55e",
              color: "#1C1C1A",
              padding: "14px 28px",
              borderRadius: "4px",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "-0.2px",
            }}
          >
            View Portfolio →
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "#7A7870",
              letterSpacing: "0.05em",
            }}
          >
            cgrv.co.uk
          </span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
