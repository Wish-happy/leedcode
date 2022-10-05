// https://leetcode-cn.com/problems/happy-number

function isHappy(n: number): boolean {
    let map: { [index: number]: number } = {}

    while (!map[n]) {
        if (n == 1) {
            return true
        }
        map[n] = 1
        n = step(n)
    }
    return false
};

function step(n: number): number{
    let sum: number = 0
    while (0 < n) {
        sum += (n % 10) * (n % 10)
        n = Math.floor(n / 10)
    }
    return sum
}