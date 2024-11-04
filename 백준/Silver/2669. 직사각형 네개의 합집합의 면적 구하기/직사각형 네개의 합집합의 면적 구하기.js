const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array.from({ length: 100 }, () => new Array(100).fill(0));
let answer = 0;

input.forEach((item) => {
  const [x1, y1, x2, y2] = item.split(' ').map(Number);

  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      arr[i][j] = 1;
    }
  }
});

arr.forEach((row) => {
  answer += row.reduce((a, b) => a + b, 0);
});

console.log(answer);