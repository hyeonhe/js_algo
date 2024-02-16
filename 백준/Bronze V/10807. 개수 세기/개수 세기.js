const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map((i) => +i);
console.log(arr.filter((i) => i === +input[2]).length);