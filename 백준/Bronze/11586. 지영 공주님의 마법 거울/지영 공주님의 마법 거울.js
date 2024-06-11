const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const status = +input.splice(-1);

if (status === 1) {
  for (let i = 0; i < n; i++) {
    console.log(input[i]);
  }
} else if (status === 2) {
  for (let i = 0; i < n; i++) {
    console.log(input[i].split('').reverse().join(''))
  }
} else if (status === 3) {
  for (let i = n - 1; i >= 0; i--) {
    console.log(input[i].split('').join(''))
  }
}