const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = input
  .split('')
  .map(Number)
  .sort((a, b) => b - a);
const total = arr.reduce((a, b) => a + b, 0);

if (!arr.includes(0)) console.log(-1);
else if (total % 3 !== 0) console.log(-1);
else console.log(arr.join(''));