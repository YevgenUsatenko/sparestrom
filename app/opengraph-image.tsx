import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "sparestrom.at — Einmal wechseln. Immer sparen.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08090c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#c5ff2e",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            ⚡
          </div>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#f2f3f5",
              letterSpacing: "-0.02em",
            }}
          >
            sparestrom
            <span style={{ color: "#c5ff2e" }}>.at</span>
          </span>
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: 600,
            color: "#f2f3f5",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            marginBottom: "24px",
          }}
        >
          Einmal wechseln.
          <br />
          <span style={{ color: "#c5ff2e", fontStyle: "italic" }}>
            Immer sparen.
          </span>
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#8b8d97",
            lineHeight: 1.4,
          }}
        >
          Ø 487 € Ersparnis pro Jahr · 100% kostenlos · E-Control-verifiziert
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "18px",
            color: "#5b5d66",
            letterSpacing: "0.1em",
          }}
        >
          MADE IN SALZBURG, AUSTRIA
        </div>
      </div>
    ),
    { ...size }
  );
}
