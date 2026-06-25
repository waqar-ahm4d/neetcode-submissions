class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let count = new Map();
        for(const char of s) {
            count.set(char, (count.get(char) || 0)+1);
        }
        for(const char of t) {
            count.set(char, (count.get(char) || 0)-1);
        }
        for(const value of count.values()) {
            if(value !== 0) return false
        }
        return true;
    }
}
