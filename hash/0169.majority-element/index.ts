// https://leetcode-cn.com/problems/majority-element

// solution1
function majorityElement(nums: number[]): number {
    let m: { [index: number]: number } = {}
    let len = nums.length / 2
    let cnt: number = 0
    for (let i = 0; i < nums.length; i++) {
        if (m[nums[i]]) {
            m[nums[i]] += 1
        } else {
            m[nums[i]] = 1
        }
    }
    for (let key in m) {
        if (len < m[key]) {
            cnt = Number(key)
        }
    }
    return cnt
}

// solution2 投票

// solution1
function majorityElement(nums: number[]): number {
    let num: number = 0
    let cnt: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (num === nums[i]) {
            cnt++
        } else {
            if (cnt === 0) {
                num = nums[i]
                cnt++
            } else {
                cnt-- // 抵消
            }
        }

    }
    return num
}

