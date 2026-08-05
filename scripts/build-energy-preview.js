const fs = require("fs");

const svg = fs
  .readFileSync("public/hero-energy-paths.svg", "utf8")
  .replace(/^<\?xml[^>]*>\s*/, "")
  .replace("<svg ", '<svg class="paths" ');

const html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Energy Graph Preview</title>
<style>
body{margin:0;background:#111;color:#fff;font-family:system-ui,sans-serif}
h1{margin:0;padding:12px 16px;font-size:16px;background:#222}
.wrap{position:relative;width:min(100vw,1400px);margin:0 auto;aspect-ratio:1920/1081;background:#000}
.wrap img,.wrap svg{position:absolute;inset:0;width:100%;height:100%;display:block}
.wrap img{object-fit:fill}
.wrap svg{z-index:2;pointer-events:none}
.note{padding:12px 16px;color:#bbb;font-size:14px;line-height:1.45;max-width:52rem}
</style>
</head>
<body>
<h1>Preview: Energie-Graph (INLINE — muss sichtbar sein)</h1>
<div class="wrap">
<img src="./hero.png" alt="Hero"/>
${svg}
</div>
<p class="note"><b>Zahlen</b> = Knoten.<br/>
Kanten-Buchstaben sind ausgeblendet.<br/><br/>
Hard-Refresh: <b>Ctrl+F5</b></p>
</body>
</html>`;

fs.writeFileSync("public/preview-energy-paths.html", html);
console.log("ok", html.length);
