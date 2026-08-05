const fs = require("fs");
const { execSync } = require("child_process");

const UNIT = 28;
const N = {
  1: [400 + 1 * UNIT, 870 - 2 * UNIT], // (428, 814)
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

function sinePath(a, b, amp = 40, waves = 1, trimPx = 22) {
  const [x0, y0] = a;
  const [x1, y1] = b;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const trimT = Math.min(0.18, trimPx / len);
  const t0 = trimT;
  const t1 = 1 - trimT;
  const steps = 8;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    const t = t0 + (t1 - t0) * u;
    const offset = Math.sin(Math.PI * waves * u) * amp;
    pts.push([x0 + dx * t + px * offset, y0 + dy * t + py * offset]);
  }
  const r = (n) => Math.round(n * 10) / 10;
  let d = `M${r(pts[0][0])} ${r(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    d += ` Q${r((p0[0] + p1[0]) / 2)} ${r((p0[1] + p1[1]) / 2)} ${r(p1[0])} ${r(p1[1])}`;
  }
  return d;
}

function edgeD(a, b) {
  const len = Math.hypot(N[a][0] - N[b][0], N[a][1] - N[b][1]);
  const amp = Math.min(56, Math.max(32, len * 0.1));
  return sinePath(N[a], N[b], amp, 1);
}

const updates = {
  "1-4": edgeD(1, 4),
  "1-3": edgeD(1, 3),
  "1-10": edgeD(1, 10),
  "1-6": edgeD(1, 6),
  "1-8": edgeD(1, 8),
};

let svg = fs.readFileSync("public/hero-energy-paths.svg", "utf8");

for (const [edge, d] of Object.entries(updates)) {
  const re = new RegExp(`(data-edge="${edge}"[\\s\\S]*?\\bd=")([^"]*)(")`);
  if (!re.test(svg)) throw new Error("edge not found: " + edge);
  svg = svg.replace(re, `$1${d}$3`);
}

svg = svg.replace(/1=\([^)]+\)/, `1=(${N[1][0]},${N[1][1]})`);
fs.writeFileSync("public/hero-energy-paths.svg", svg);
console.log("node 1 ->", N[1]);
console.log("updated", Object.keys(updates).join(", "));
