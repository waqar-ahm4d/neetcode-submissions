class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //using map
        const map = new Map();
        for (const str of strs) {
            const freq = new Array(26).fill(0);
            for (const ch of str) {
                freq[ch.charCodeAt(0) - 97]++;
            }
            const key = freq.join(',');
            if(!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }
        return Array.from(map.values());

    }
}
