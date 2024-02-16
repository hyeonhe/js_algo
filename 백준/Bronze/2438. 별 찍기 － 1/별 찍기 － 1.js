const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim();

for (let i = 1; i <= +input; i++) {
  console.log("*".repeat(i));
}