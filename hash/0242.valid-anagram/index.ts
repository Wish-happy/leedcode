// https://leetcode-cn.com/problems/valid-anagram

// solution1
function isAnagram(s: string, t: string): boolean {
    let m: { [index: number]: number } = {}
    if (s.length !== t.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (m[s[i]]) {
            m[s[i]] += 1
        } else {
            m[s[i]] = 1
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (m[t[j]] == undefined) {

        }
        m[t[j]]--
    }
    for (let key in m) {
        if (m[key] != 0) {
            return false
        }
    }
    return true
};

// solution2
function isAnagram(s: string, t: string): boolean {
    let arr:Array<number> = new Array<number>(26).fill(0)
    let num: number = 97
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - num]++
    }
    for (let j = 0; j < t.length; j++) {
        arr[t.charCodeAt(j) - num]--
    }
    for(let k of arr){
        console.log(typeof arr)
        if(arr[k] !=0){
            return false
        }

    }
    return true
};