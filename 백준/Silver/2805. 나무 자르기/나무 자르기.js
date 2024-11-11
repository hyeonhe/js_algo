const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let right = Math.max(...arr);
let left = 0;
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const tree = arr.reduce(
    (sum, height) => (height > mid ? sum + (height - mid) : sum),
    0
  );

  if (tree >= m) {
    left = mid + 1;
    result = mid;
  } else {
    right = mid - 1;
  }
}

console.log(result);