// ESM version (works with "type": "module")
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve("dist/index.html");
const dst = resolve("dist/404.html");

copyFileSync(src, dst);
console.log("Copied dist/index.html -> dist/404.html");
