function solution(id_list, report, k) {
    const reportSet = new Set(report)
    const listCount = {}
    const answer = {}

    for (const id of id_list) {
        answer[id] = 0
    }

    for (const item of reportSet) {
        const [id1, id2] = item.split(' ')
        listCount[id2] = (listCount[id2] || 0) + 1
    }


    for (const item of reportSet) {
        const [id1, id2] = item.split(' ')
        if (listCount[id2] >= k) answer[id1]++
    }

    return Object.values(answer)
}