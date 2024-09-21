const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [ans, x, y] = [0, 0, 0];

const arr = input.map((row) => row.split(" ").map(Number));

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (ans < arr[i][j]) {
      ans = arr[i][j];
      x = i;
      y = j;
    }
  }
}

console.log(ans);
console.log(x + 1, y + 1);