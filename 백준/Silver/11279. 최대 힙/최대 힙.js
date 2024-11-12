const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.shift();

class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.#bubbleUp();
  }

  #bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element < parent) break;

      [this.values[idx], this.values[parentIdx]] = [parent, element];
      idx = parentIdx;
    }
  }

  extractMax() {
    if (this.values.length === 0) {
      return 0;
    }

    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.#sinkDown();
    }

    return max;
  }

  #sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (idx < length) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let leftElement, rightElement;
      let swap = null;
      if (leftIdx < length) {
        leftElement = this.values[leftIdx];
        if (leftElement > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightElement = this.values[rightIdx];
        if (
          (swap === null && rightElement > element) ||
          (swap !== null && rightElement > leftElement)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];

      idx = swap;
    }
  }
}

const maxHeap = new MaxHeap();
const answer = [];
input.forEach((x) => {
  if (x === 0) {
    const max = maxHeap.extractMax();
    answer.push(max);
  } else {
    maxHeap.insert(x);
  }
});

console.log(answer.join('\n'));