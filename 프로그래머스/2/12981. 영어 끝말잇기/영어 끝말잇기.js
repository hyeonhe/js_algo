function solution(n, words) {
    var answer = [0, 0];
    const set = new Set()
    let lastWord = ''
    
    for (let i=0; i < words.length; i++) {
        let [a, b] = [0, 0]
        let quotient = parseInt(i / n)
        a = i - quotient * n + 1
        b = quotient + 1
        
        if (set.has(words[i])) {
            return [a, b]
        } else set.add(words[i])
        
        if (i > 0 && (lastWord !== words[i].slice(0, 1))){
            return [a, b]
        }
        
        lastWord = words[i].slice(-1)
    }

    return answer;
}
