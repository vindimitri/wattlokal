const fs = require("fs");
const { execSync } = require("child_process");

const UNIT = 28;
const N = {
  1: [400, 870],
  2: [924, 616],
  3: [1580, 890],
  4: [520, 620],
  5: [1280, 640],
  6: [114, 945],
  8: [138, 692],
  10: [898, 740],
  14: [1392, 740],
  15: [1680, 680],
  16: [300, 540],
  17: [680, 512],
  18: [1064, 546],
};

// Move 8: 2.5 left, 0.5 up
N[8] = [138 - 2.5 * UNIT, 692 - 0.5 * UNIT]; // (68, 678)

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
  "1-8": edgeD(1, 8),
  "4-8": edgeD(4, 8),
  "6-8": edgeD(6, 8),
  "8-16": edgeD(8, 16),
};

let svg = fs.readFileSync("public/hero-energy-paths.svg", "utf8");

// Update only those path d attributes (geometry of others untouched)
for (const [edge, d] of Object.entries(updates)) {
  const re = new RegExp(
    `(data-edge="${edge}"[\\s\\S]*?\\bd=")([^"]*)(")`,
  );
  if (!re.test(svg)) throw new Error("edge not found: " + edge);
  svg = svg.replace(re, `$1${d}$3`);
}

// Update node-8 coords in labels if present
svg = svg.replace(
  /(<g id="node-8"[\s\S]*?<circle cx=")[^"]+(" cy=")[^"]+("[\s\S]*?<text x=")[^"]+(" y=")[^"]+(")/,
  `$1${N[8][0]}$2${N[8][1]}$3${N[8][0]}$4${N[8][1]}$5`,
);

// Update HOUSES comment
svg = svg.replace(/8=\([^)]+\)/, `8=(${N[8][0]},${N[8][1]})`);

fs.writeFileSync("public/hero-energy-paths.svg", svg);
console.log("node 8 ->", N[8]);
console.log("updated edges", Object.keys(updates).join(", "));

// Refresh labels (letters + node markers) from current SVG paths
execSync("node scripts/add-edit-labels.js", { stdio: "inherit" });
execSync("node scripts/build-energy-preview.js", { stdio: "inherit" });
