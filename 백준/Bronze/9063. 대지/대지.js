const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const n = +input.shift()
const x = []
const y = []

input.forEach(item => {
  const [a, b] = item.split(' ').map(Number)
  x.push(a)
  y.push(b)
})

const x_min = Math.min(...x)
const x_max = Math.max(...x)
const y_min = Math.min(...y)
const y_max = Math.max(...y)

console.log((x_max - x_min) * (y_max - y_min))