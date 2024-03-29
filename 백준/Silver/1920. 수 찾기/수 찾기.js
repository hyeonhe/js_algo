const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const answer = [];
const arr = input[1].split(" ").map((v) => +v);
const nums = input[3].split(" ").map((v) => +v);

arr.sort((a, b) => a - b);

nums.forEach((val) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = false;
    
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (val > arr[mid]) {
      start = mid + 1;
    } else if (val < arr[mid]) {
      end = mid - 1;
    } else {
      ans = true;
      break;
    }
  }
    
  if (ans) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join("\n"));