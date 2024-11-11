const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();
const answer = [];

input.forEach((item) => {
  const [a, b] = item.split(' ').map(Number);
  answer.push(a ** 2 / b ** 2);
});

console.log(answer.join('\n'));