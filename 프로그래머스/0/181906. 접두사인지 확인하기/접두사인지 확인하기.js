function solution(my_string, is_prefix) {
    var answer = 0;
    
    for (let i = 0; i < my_string.length - is_prefix.length + 1; i++) {
        if (is_prefix === my_string.slice(0, is_prefix.length + i)) {
            answer = 1
        }
    }
    return answer;
}