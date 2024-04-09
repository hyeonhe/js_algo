let input = require("fs").readFileSync("/dev/stdin", "utf8").toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const str of arr) {
  input = input.replaceAll(str, ".");
}

console.log(input.length);