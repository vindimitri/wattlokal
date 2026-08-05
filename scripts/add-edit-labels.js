const fs = require("fs");

const NODES = {
  1: [428, 814, true],
  2: [924, 616, true],
  3: [1580, 890, true],
  4: [520, 620, true],
  5: [1280, 640, true],
  6: [114, 945, false],
  8: [68, 678, false],
  10: [898, 740, false],
  14: [1392, 740, false],
  15: [1680, 680, false],
  16: [300, 540, false],
  17: [680, 512, false],
  18: [1064, 546, false],
};

function letter(i) {
  if (i < 26) return String.fromCharCode(65 + i);
  return "A" + String.fromCharCode(65 + (i - 26));
}

let svg = fs.readFileSync("public/hero-energy-paths.svg", "utf8");

// Strip previous edit-labels block if present
svg = svg.replace(/\n  <g id="edit-labels"[\s\S]*?\n  <\/g>(?=\n<\/svg>)/, "");

// Keep data-letter on paths for tooling, no visual edge badges
let edgeIndex = 0;
const edgeMeta = [];
svg = svg.replace(/<path\b([^>]*)\/>/g, (full, attrs) => {
  const dMatch = attrs.match(/\bd="([^"]*)"/);
  const edgeMatch = attrs.match(/\bdata-edge="([^"]*)"/);
  if (!dMatch) return full;
  const L = letter(edgeIndex++);
  edgeMeta.push({ letter: L, edge: edgeMatch ? edgeMatch[1] : null });
  let next = attrs
    .replace(/\s*data-letter="[^"]*"/g, "")
    .replace(/\s*id="edge-[^"]*"/g, "");
  next = ` data-letter="${L}" id="edge-${L}"` + next;
  return `<path${next}/>`;
});

const nodeXml = Object.entries(NODES)
  .map(([id, [x, y, hub]]) => {
    const r = hub ? 18 : 14;
    const stroke = hub ? "#FFEA00" : "#FFE566";
    const fillText = hub ? "#FFEA00" : "#FFE566";
    const sw = hub ? 4 : 3;
    const fs_ = hub ? 18 : 14;
    return `    <g id="node-${id}" data-node="${id}"${hub ? ' data-hub="1"' : ""}>
      <circle cx="${x}" cy="${y}" r="${r}" fill="#111" stroke="${stroke}" stroke-width="${sw}"/>
      <text x="${x}" y="${y}" fill="${fillText}" font-size="${fs_}">${id}</text>
    </g>`;
  })
  .join("\n");

const labels = `
  <g id="edit-labels" font-family="system-ui,Segoe UI,sans-serif" font-weight="800" text-anchor="middle" dominant-baseline="central">
    <g id="nodes">
${nodeXml}
    </g>
  </g>
`;

svg = svg.replace(/\n<\/svg>\s*$/, `${labels}\n</svg>\n`);

const legend = edgeMeta.map((e) => `${e.letter}=${e.edge}`).join(" ");
svg = svg.replace(
  /EDGE LETTERS: [^\n]*/,
  `EDGE LETTERS (no badges): ${legend}`,
);
if (!svg.includes("EDGE LETTERS")) {
  svg = svg.replace(
    /Premium smart-grid styling\. Geometry preserved\./,
    `Premium smart-grid styling. Geometry preserved.\n    EDGE LETTERS (no badges): ${legend}`,
  );
}

fs.writeFileSync("public/hero-energy-paths.svg", svg);
console.log("nodes:", Object.keys(NODES).length);
console.log("edge letters (attrs only):", edgeMeta.map((e) => `${e.letter}:${e.edge}`).join(" "));
