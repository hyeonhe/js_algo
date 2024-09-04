const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("");
const answer = [];

for (const str of arr) {
  const cnt = str
    .charCodeAt()
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  answer.push(str.repeat(cnt));
}

console.log(answer.join("\n"));