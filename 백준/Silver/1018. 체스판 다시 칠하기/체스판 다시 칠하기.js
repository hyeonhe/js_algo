const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let answer = 100;

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    let draw1 = 0;
    let draw2 = 0;

    for (let a = i; a < i + 8; a++) {
      for (let b = j; b < j + 8; b++) {
        if ((a + b) % 2 === 0) {
          if (input[a][b] !== "B") draw1++;
          else draw2++;
        } else {
          if (input[a][b] !== "W") draw1++;
          else draw2++;
        }
      }
    }

    let min = draw1 < draw2 ? draw1 : draw2;
    answer = answer < min ? answer : min;
  }
}

console.log(answer);