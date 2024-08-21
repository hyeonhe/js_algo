function isEqualObject(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    
    if (keys1.length !== keys2.length) return false
    
    for (const key of keys1) {
        const value1 = obj1[key]
        const value2 = obj2[key]
        
        if (value1 !== value2) return false
    }
    
    return true
}

function solution(want, number, discount) {
    const wishList = {}
    let cnt = 0
    for (let i = 0; i < want.length; i++) {
        wishList[want[i]] = number[i]
    }
    
    for (let i = 0; i < discount.length - 9; i++) {
        const discountList = {}
        for (let j = i; j < i + 10; j++) {
            if (discountList[discount[j]]) discountList[discount[j]]++
            else discountList[discount[j]] = 1
        }
        
        if (isEqualObject(wishList, discountList)) cnt++
    }
    console.log(wishList)
    
    return cnt
}