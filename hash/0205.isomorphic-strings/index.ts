// https://leetcode-cn.com/problems/isomorphic-strings

function isIsomorphic(s: string, t: string): boolean {
    let mS: { [index: string]: string } = {}
    let mT: { [index: string]: string } = {}

    if (s.length !== t.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (mS[s[i]] == undefined && mT[t[i]] == undefined) {
            mS[s[i]] = t[i]
            mT[t[i]] = s[i]
        } else if (mS[s[i]] != t[i] || mT[t[i]] != s[i]) {
            return false
        }
    }
    return true
};