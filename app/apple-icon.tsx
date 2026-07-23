import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B132B",
          borderRadius: 36,
          color: "#FFEA00",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          letterSpacing: -4,
        }}
      >
        <div style={{ display: "flex", lineHeight: 1 }}>W</div>
        <div
          style={{
            width: 64,
            height: 10,
            borderRadius: 8,
            background: "#FFEA00",
            marginTop: 12,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
