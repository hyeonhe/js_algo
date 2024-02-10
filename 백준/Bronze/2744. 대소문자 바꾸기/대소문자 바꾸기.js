let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const str = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    str.push(input[i].toLowerCase());
  } else {
    str.push(input[i].toUpperCase());
  }
}

console.log(str.join(""));
