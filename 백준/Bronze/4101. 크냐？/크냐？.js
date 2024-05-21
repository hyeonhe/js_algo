const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

input.forEach((item) => {
  const [a, b] = item.split(' ').map(Number)
  if (a !== 0 || b !== 0) {
    console.log(a > b ? "Yes" : 'No')
  }
})