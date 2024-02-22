const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let string = "";
let stack = [];
let isOpen = false;

for (let i = 0; i < input.length; i++) {
  const s = input[i];
  if (s === "<") {
    if (stack.length) {
      string += stack.reverse().join("");
      stack = [];
    }
    string += s;
    isOpen = true;
  } else if (s === ">") {
    string += s;
    isOpen = false;
  } else if (isOpen) {
    string += s;
  } else if (s === " ") {
    if (stack.length) {
      string += stack.reverse().join("");
      stack = [];
    }
    string += s;
  } else {
    stack.push(s);
  }
}

if (stack.length) {
  string += stack.reverse().join("");
  stack = [];
}
console.log(string);
