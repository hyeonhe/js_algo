function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    
    for (let k = 0; k < goal.length; k++) {
        if (goal[k] === cards1[i]) i++
        else if (goal[k] === cards2[j]) j++
        else return 'No'
    }
    
    return 'Yes';
}