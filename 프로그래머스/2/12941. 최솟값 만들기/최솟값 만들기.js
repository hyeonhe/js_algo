function solution(A,B){
    var answer = 0;
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    
    sortedA.forEach((v, i) => answer += v *sortedB[i])
    
    return answer;
}