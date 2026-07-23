import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B132B",
          borderRadius: 8,
          color: "#FFEA00",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          letterSpacing: -1,
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
