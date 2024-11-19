const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'text.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = input.pop().split(' ').map(Number);

console.log(numbers.filter((num) => isPrime(num)).length);