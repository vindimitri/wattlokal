const fs = require("fs");

const svg = fs.readFileSync("public/hero-energy-paths.svg", "utf8");
const pathRe = /<path\b([^>]*)\/>/g;
const paths = [];
let m;
while ((m = pathRe.exec(svg))) {
  const attrs = m[1];
  const dMatch = attrs.match(/\bd="([^"]*)"/);
  const edgeMatch = attrs.match(/\bdata-edge="([^"]*)"/);
  if (!dMatch) throw new Error("missing d on path");
  paths.push({
    edge: edgeMatch ? edgeMatch[1] : null,
    d: dMatch[1],
  });
}

if (paths.length === 0) throw new Error("no paths found");

const pathXml = paths
  .map((p) => {
    const edgeAttr = p.edge ? ` data-edge="${p.edge}"` : "";
    return `  <path${edgeAttr}
    class="energy-path"
    fill="none"
    stroke="url(#energyGradient)"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    vector-effect="non-scaling-stroke"
    filter="url(#energyGlow)"
    d="${p.d}"/>`;
  })
  .join("\n");

const out = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1081" width="1920" height="1081" fill="none">
  <!--
    Premium smart-grid styling. Geometry preserved.
    HUBS: 1=(400,870) 2=(924,616) 3=(1580,890) 4=(520,620) 5=(1280,640)
    HOUSES: 6=(114,945) 8=(138,692) 10=(898,740)
      14=(1392,740) 15=(1680,680) 16=(300,540) 17=(680,512) 18=(1064,546)
  -->
  <defs>
    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF7B0"/>
      <stop offset="25%" stop-color="#FFE45C"/>
      <stop offset="50%" stop-color="#FFC107"/>
      <stop offset="75%" stop-color="#FFD84A"/>
      <stop offset="100%" stop-color="#FFF2A0"/>
    </linearGradient>

    <filter id="energyGlow" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blurSoft"/>
      <feColorMatrix
        in="blurSoft"
        type="matrix"
        values="1 0 0 0 0
                0 0.92 0 0 0
                0 0 0.55 0 0
                0 0 0 0.55 0"
        result="glowTint"/>
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="blurCore"/>
      <feMerge>
        <feMergeNode in="glowTint"/>
        <feMergeNode in="blurCore"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

${pathXml}
</svg>
`;

fs.writeFileSync("public/hero-energy-paths.svg", out);
console.log("styled", paths.length, "paths; geometry preserved");
