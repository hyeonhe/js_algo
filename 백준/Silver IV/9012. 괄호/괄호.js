const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
input.forEach((ps) => {
  let balance = 0;
  let ans = "YES";
  for (let i = 0; i < ps.length; i++) {
    if (ps[i] === "(") {
      balance++;
    } else if (ps[i] === ")") {
      balance--;
    }

    if (balance < 0) {
      ans = "NO";
      break;
    }
  }
  console.log(balance === 0 ? ans : "NO");
});