function solution(s)
{
    const stack = []
    for (const c of s) {
        if (stack.length === 0) stack.push(c)
        else {
            if (stack[stack.length - 1] !== c) stack.push(c)
            else stack.pop()
        }
    }

    return stack.length === 0 ? 1 : 0;
}