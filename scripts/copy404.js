// scripts/copy404.js
const fs = require("fs");
const path = require("path");
const src = path.resolve("dist/index.html");
const dst = path.resolve("dist/404.html");
fs.copyFileSync(src, dst);
console.log("Copied dist/index.html -> dist/404.html");
