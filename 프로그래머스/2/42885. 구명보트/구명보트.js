function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a-b)
    
    let i = 0;
    let j = people.length - 1
    
    while(i <= j) {
        if (people[i] + people[j] <= limit) {
            i++
        }
        j--
        answer++
    }
    
    return answer;
}