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
          justifyContent: "center",
          padding: "60px 80px",
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

        {/* Category label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "28px",
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

        {/* DALE */}
        <div
          style={{
            fontSize: "130px",
            fontWeight: 800,
            color: "#1C1C1A",
            lineHeight: 0.88,
            letterSpacing: "-3px",
            display: "flex",
          }}
        >
          DALE
        </div>

        {/* COSGROVE — per-letter colour */}
        <div
          style={{
            fontSize: "130px",
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: "-3px",
            marginBottom: "32px",
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

        {/* Headline — prominent role statement */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "40px",
              background: "#22c55e",
              display: "flex",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#1C1C1A",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Food Safety Professional &amp; Tech Enthusiast
          </span>
        </div>

        {/* CTA pill */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#1C1C1A",
              color: "#F6F4EF",
              padding: "12px 24px",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            View Portfolio at cgrv.co.uk
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
