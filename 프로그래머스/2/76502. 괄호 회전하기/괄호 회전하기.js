function isValid(str) {
    const stack = []
    for (const c of str) {
        if (c === '[' || c === '(' || c === '{') {
            stack.push(c)
        } else {
            if (stack.length === 0) return false  
            else if (c === ']') {
                if (stack.pop() !== '[') return false
            } else if (c === ')') {
                if (stack.pop() !== '(') return false
            } else if (c === '}') {
                if (stack.pop() !== '{') return false
            }
        } 
    }
    
    return stack.length === 0 ? true : false
}

function solution(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
       answer += isValid(s.slice(i)+ s.slice(0,i))
    }
    
    return answer;
}