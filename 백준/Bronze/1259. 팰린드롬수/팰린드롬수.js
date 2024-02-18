const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").toString().trim().split("\n");

input.forEach((num) => {
  if (+num !== 0) {
    let ans = "yes";
    for (let i = 0; i < parseInt(num.length / 2); i++) {
      if (+num[i] !== +num[num.length - 1 - i]) {
        ans = "no";
        break;
      }
    }
    console.log(ans);
  }
});