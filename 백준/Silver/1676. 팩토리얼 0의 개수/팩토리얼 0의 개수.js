const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let cnt = 0;

while (n >= 5) {
  n = Math.floor(n / 5);
  cnt += n;
}

console.log(cnt);
