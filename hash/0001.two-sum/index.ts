// https://leetcode-cn.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
    let m: { [index: number]: number } = {}
    for (let i = 0; i < nums.length; i++) {
        if (m[target - nums[i]] !== undefined) {
            return [m[target - nums[i]], i]
        }
        m[nums[i]] = i
    }
    return []
}