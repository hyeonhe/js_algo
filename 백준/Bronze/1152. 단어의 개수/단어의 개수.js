let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let wordArr = input.trim().split(" ");
let cnt = 0;

for (let i = 0; i < wordArr.length; i++) {
  if (wordArr[i] !== "") {
    cnt++;
  }
}
console.log(cnt);
