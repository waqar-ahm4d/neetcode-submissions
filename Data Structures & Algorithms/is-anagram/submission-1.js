class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // using hashMap
    // isAnagram(s, t) {
    //     if(s.length !== t.length) return false;
    //     let count = new Map();
    //     for(const char of s) {
    //         count.set(char, (count.get(char) || 0)+1);
    //     }
    //     for(const char of t) {
    //         count.set(char, (count.get(char) || 0)-1);
    //     }
    //     for(const value of count.values()) {
    //         if(value !== 0) return false
    //     }
    //     return true;
    // }
    // using fixed Array
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let count = new Array(26).fill(0);
        for(let i = 0; i<s.length; i++){
            count[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
        }
        return count.every(val => val === 0);
    }
}
