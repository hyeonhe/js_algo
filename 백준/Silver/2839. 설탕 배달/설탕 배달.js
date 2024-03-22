const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let cnt = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    cnt += parseInt(n / 5);
    break;
  }
  n -= 3;
  cnt++;
}

console.log(n < 0 ? -1 : cnt);