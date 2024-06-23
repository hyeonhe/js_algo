const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b, c, d] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

arr.forEach((i) => {
  let cnt = 0;
  let rest1 = i % (a + b);
  let rest2 = i % (c + d);

  if (rest1 <= a && rest1 !== 0) {
    cnt++;
  }
  if (rest2 <= c && rest2 !== 0) {
    cnt++;
  }

  console.log(cnt);
});