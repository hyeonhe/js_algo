let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let [a, b] = input.split(" ");
a = parseInt(a);
b = parseInt(b);
let ans = "";

if (a > b) {
  ans = ">";
} else if (a < b) {
  ans = "<";
} else {
  ans = "==";
}

console.log(ans);