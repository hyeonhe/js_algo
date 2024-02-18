const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").toString().trim().split("\n");

input.forEach((num) => {
  if (+num !== 0) {
    const isPalindrome =
      num === num.split("").reverse().join("") ? "yes" : "no";

    console.log(isPalindrome);
  }
});