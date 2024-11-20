let white = 0;
let blue = 0;
function slicePaper(x, y, size) {
  const paper = arr[x][y];
  const half = size / 2;
    
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper !== arr[i][j]) {
        slicePaper(x, y, half);
        slicePaper(x, y + half, half);
        slicePaper(x + half, y, half);
        slicePaper(x + half, y + half, half);
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

slicePaper(0, 0, arr.length);
console.log(white);
console.log(blue);