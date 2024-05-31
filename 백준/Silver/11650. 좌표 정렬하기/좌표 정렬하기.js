const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift()

const arr = []
input.forEach(item => {
  const [a, b] = item.split(' ')
  arr.push([+a, +b])
})

arr.sort((a, b) => {
  if(a[0] === b[0]) {
    return a[1] - b[1]
  }
  return a[0] - b[0]
})

console.log(arr.map(i => i.join(' ')).join('\n'))