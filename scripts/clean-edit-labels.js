const fs = require("fs");

let svg = fs.readFileSync("public/hero-energy-paths.svg", "utf8");

function removeEditLabels(svgText) {
  while (svgText.includes('id="edit-labels"')) {
    const start = svgText.indexOf('<g id="edit-labels"');
    let i = start;
    let depth = 0;
    let end = -1;
    while (i < svgText.length) {
      const open = svgText.indexOf("<g ", i);
      const close = svgText.indexOf("</g>", i);
      if (close === -1) break;
      if (open !== -1 && open < close) {
        depth++;
        i = open + 3;
      } else {
        depth--;
        i = close + 4;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    if (end === -1) throw new Error("unbalanced edit-labels");
    svgText = svgText.slice(0, start) + svgText.slice(end);
  }
  return svgText;
}

svg = removeEditLabels(svg);
fs.writeFileSync("public/hero-energy-paths.svg", svg);
console.log("cleaned edit-labels count", (svg.match(/edit-labels/g) || []).length);
