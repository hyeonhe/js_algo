const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, cards, m, numbers] = input;
const answer = [];

cards = new Set(cards.split(" ").map(Number));
numbers = numbers.split(" ").map(Number);

numbers.forEach((i) => {
  if (cards.has(i)) {
    answer.push(1);
  } else answer.push(0);
});

console.log(answer.join(" "));