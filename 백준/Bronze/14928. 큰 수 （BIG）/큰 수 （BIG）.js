const input = require("fs").readFileSync("/dev/stdin").toString().trim()
const n = BigInt(input)
const ans = String(n % 20000303n)

console.log(ans)