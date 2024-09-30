function solution(nums) {
    const cnt = new Set(nums).size
    
    return Math.min(cnt, nums.length / 2)
}