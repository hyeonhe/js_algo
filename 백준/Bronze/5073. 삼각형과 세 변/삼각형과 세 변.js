const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

for (let i = 0; i < input.length - 1; i++){
  const array = input[i].split(' ').map(Number).sort((a, b) => b-a)

  if (array[0] >= array[1] + array[2]) {
    console.log('Invalid')
  } else if((array[0] === array[1]) && (array[1] === array[2])) {
    console.log('Equilateral')
  } else if ((array[0] !== array[1]) && (array[1] !== array[2]) && (array[2] !== array[0])) {
    console.log('Scalene')
  } else console.log('Isosceles')
}