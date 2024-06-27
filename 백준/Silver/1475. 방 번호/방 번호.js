const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numbers = input.split("").map(Number);
const arr = Array(10).fill(0);

numbers.forEach((num) => {
  arr[num]++;
});

arr[6] = Math.ceil((arr[6] + arr[9]) / 2);
arr[9] = 0;
console.log(Math.max(...arr));