const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();

input.forEach((item) => {
  const [name, age, weight] = item.split(" ");
  if (age > 17 || weight >= 80) console.log(name, "Senior");
  else console.log(name, "Junior");
});