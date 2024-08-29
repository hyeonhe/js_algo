const fs = require("fs");
const [n, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(n, m));
console.log(lcm(n, m));