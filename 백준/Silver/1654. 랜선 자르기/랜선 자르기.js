const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [k, n] = input
  .shift()
  .split(" ")
  .map((i) => +i);

const nums = input.map((i) => +i).sort((a, b) => a - b);

let min = 1;
let max = nums[k - 1];

while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let lines = nums.map((i) => parseInt(i / mid)).reduce((a, b) => a + b, 0);

  if (lines >= n) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);