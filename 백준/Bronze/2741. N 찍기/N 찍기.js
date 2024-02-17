const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const n = fs.readFileSync(filePath).toString().trim();

const arr = [];
for (let i = 1; i <= +n; i++) {
  arr.push(i);
}

console.log(arr.join("\n"));