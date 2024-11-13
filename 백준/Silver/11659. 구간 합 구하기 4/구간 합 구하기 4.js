const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const numArr = input.shift().split(' ').map(Number);
const arr = Array(n + 1).fill(0);
const answer = [];

numArr.forEach((v, i) => {
  arr[i + 1] = arr[i] + v;
});

input.forEach((idx) => {
  const [i, j] = idx.split(' ').map(Number);
  answer.push(arr[j] - arr[i - 1]);
});

console.log(answer.join('\n'));