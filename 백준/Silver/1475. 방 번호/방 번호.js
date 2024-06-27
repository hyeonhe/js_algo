const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numbers = input.replaceAll("9", "6").split("");
const map = new Map();

numbers.forEach((num) => {
  if (map.get(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
});

map.get('6') && map.set('6', Math.ceil(map.get('6') / 2))
console.log(Math.max(...map.values()));