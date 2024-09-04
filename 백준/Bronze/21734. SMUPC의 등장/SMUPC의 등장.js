const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("");

for (const str of arr) {
  const cnt = str
    .charCodeAt()
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  console.log(str.repeat(cnt));
}
