let white = 0;
let blue = 0;
function slicePaper(arr) {
  const paper = arr[0][0];
  const half = arr.length / 2;
    
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (paper !== arr[i][j]) {
        slicePaper(arr.slice(0, half).map((row) => row.slice(0, half)));
        slicePaper(arr.slice(0, half).map((row) => row.slice(half)));
        slicePaper(arr.slice(half).map((row) => row.slice(0, half)));
        slicePaper(arr.slice(half).map((row) => row.slice(half)));
        return;
      }
    }
  }

  paper === 0 ? white++ : blue++;
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();
const arr = input.map((row) => row.split(' ').map(Number));

slicePaper(arr);
console.log(white);
console.log(blue);