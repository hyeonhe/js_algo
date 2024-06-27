const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numbers = input.replaceAll("9", "6").split("");
const arr = Array(9).fill(0);

numbers.forEach((num) => {
  arr[+num]++;
});

arr[6] = Math.ceil(arr[6] / 2);
console.log(Math.max(...arr));