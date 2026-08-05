const fs = require("fs");

// node id -> [x,y]
const N = {
  1: [428, 814],
  2: [924, 616],
  3: [1580, 890],
  4: [520, 620],
  5: [1280, 640],
  6: [114, 945],
  8: [68, 678],
  10: [898, 740],
  14: [1392, 740],
  15: [1680, 680],
  16: [300, 540],
  17: [680, 512],
  18: [1064, 546],
};

const edges = [
  ["1-4", 1, 4, 5],
  ["1-3", 1, 3, 5],
  ["1-10", 1, 10, 4],
  ["10-3", 10, 3, 4],
  ["2-4", 2, 4, 4.5],
  ["2-5", 2, 5, 4.5],
  ["14-3", 14, 3, 4],
  ["1-6", 1, 6, 4],
  ["1-8", 1, 8, 4],
  ["3-15", 3, 15, 4],
  ["4-8", 4, 8, 4],
  ["4-16", 4, 16, 4],
  ["4-17", 4, 17, 4],
  ["4-10", 4, 10, 4],
  ["5-10", 5, 10, 4],
  ["5-14", 5, 14, 4],
  ["5-15", 5, 15, 4],
  ["5-18", 5, 18, 4],
  ["2-18", 2, 18, 4],
  ["2-10", 2, 10, 4],
  ["6-8", 6, 8, 3, "#FFE566"],
  ["8-16", 8, 16, 3, "#FFE566"],
  ["16-17", 16, 17, 3, "#FFE566"],
  ["17-18", 17, 18, 3, "#FFE566"],
];

/**
 * Light sine wave along chord A->B.
 * Trim a bit at both ends so lines don't sit on house centers.
 * amplitude ~32-56px, one half-period
 */
function sinePath(a, b, amp = 40, waves = 1, trimPx = 22) {
  const [x0, y0] = a;
  const [x1, y1] = b;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;

  // trim fraction of chord length at each end
  const trimT = Math.min(0.18, trimPx / len);
  const t0 = trimT;
  const t1 = 1 - trimT;

  const steps = 8;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    const t = t0 + (t1 - t0) * u;
    // remap sine so it still starts/ends near 0 over the trimmed segment
    const offset = Math.sin(Math.PI * waves * u) * amp;
    pts.push([x0 + dx * t + px * offset, y0 + dy * t + py * offset]);
  }

  let d = `M${r(pts[0][0])} ${r(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const mx = (p0[0] + p1[0]) / 2;
    const my = (p0[1] + p1[1]) / 2;
    d += ` Q${r(mx)} ${r(my)} ${r(p1[0])} ${r(p1[1])}`;
  }
  return d;
}

function r(n) {
  return Math.round(n * 10) / 10;
}

const paths = edges
  .map(([id, a, b, w, color = "#FFD000"]) => {
    // slightly longer edges get a tad more amp; short ones less
    const len = Math.hypot(N[a][0] - N[b][0], N[a][1] - N[b][1]);
    const amp = Math.min(56, Math.max(32, len * 0.1));
    const d = sinePath(N[a], N[b], amp, 1);
    return `  <path data-edge="${id}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"\n    d="${d}"/>`;
  })
  .join("\n");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1081" width="1920" height="1081">
  <!--
    Light sine-wave edges (amp ~8-14px, 1 half-period)
    HUBS: 1=(400,870) 2=(924,616) 3=(1580,890) 4=(520,620) 5=(1280,640)
    HOUSES: 6=(114,945) 8=(138,692) 10=(898,740)
      14=(1392,740) 15=(1680,680) 16=(300,540) 17=(680,512) 18=(1064,546)
  -->
${paths}
</svg>
`;

fs.writeFileSync("public/hero-energy-paths.svg", svg);
console.log("wrote sine edges", edges.length);
