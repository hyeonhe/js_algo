const fs = require("fs");
const [N, P] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = P;

if (N >= 20) answer = P * 0.75;
if (N >= 15) answer = Math.min(answer, P - 2000);
if (N >= 10) answer = Math.min(answer, P * 0.9);
if (N >= 5) answer = Math.min(answer, P - 500);

console.log(answer > 0 ? answer : 0);