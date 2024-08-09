function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            i !== j && answer.push(numbers[i] + numbers[j])
        }
    }
    
    const uniqueArr = [...new Set(answer)]
    
    return uniqueArr.sort((a, b) => a - b);
}