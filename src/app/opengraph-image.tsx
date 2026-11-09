import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = "Rodrigo Criveleto de Andrade — Psicologia Clínica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f8f7f4",
        color: "#1a2d45",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid #b8a99b",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.08em" }}>
          PSICOLOGIA CLÍNICA · ONLINE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 76,
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              color: "#526672",
              display: "flex",
              fontSize: 27,
              marginTop: 24,
            }}
          >
            {siteConfig.professionalTitle} · {siteConfig.registration}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
