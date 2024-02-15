const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const n = Number(input);

for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}