import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dale Cosgrove — Food Safety Professional & Tech Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Fetch Syne ExtraBold from Google Fonts
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
          padding: "64px 80px",
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

        {/* Label strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "#1C1C1A",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#7A7870",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Quality · Food Safety · Supply Chain
          </span>
        </div>

        {/* DALE */}
        <div
          style={{
            fontSize: "148px",
            fontWeight: 800,
            color: "#1C1C1A",
            lineHeight: 0.88,
            letterSpacing: "-4px",
            display: "flex",
          }}
        >
          DALE
        </div>

        {/* COSGROVE — each letter coloured */}
        <div
          style={{
            fontSize: "148px",
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: "-4px",
            marginBottom: "44px",
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

        {/* Role with green bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "34px",
              background: "#22c55e",
              display: "flex",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "#1C1C1A",
              letterSpacing: "-0.3px",
            }}
          >
            Food Safety Professional &amp; Tech Enthusiast
          </span>
        </div>

        {/* URL — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "80px",
            fontSize: "15px",
            color: "#7A7870",
            letterSpacing: "0.05em",
          }}
        >
          cgrv.co.uk
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
