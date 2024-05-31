const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift()

const arr = []

input.forEach(item => {
  const [age, name] = item.split(' ')
  arr.push([Number(age), name])
})

arr.sort((a, b) => a[0] - b[0])

console.log(arr.map(i => i.join(' ')).join('\n'))