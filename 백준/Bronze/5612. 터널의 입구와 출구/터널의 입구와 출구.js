const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const m = +input.shift();

let answer = m;
let car = m;

for (let i = 0; i < n; i++) {
  const [enter, out] = input[i].split(' ').map(Number);

  car = car + enter - out;

  if (car >= 0) {
    answer = Math.max(car, answer);
  } else {
    answer = 0;
    break;
  }
}

console.log(answer);