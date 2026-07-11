class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for(let i=0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0)+1);
        }
        const sorted = Array.from(freqMap.keys()).sort(
            (a,b) => freqMap.get(b) - freqMap.get(a)
        );
        return sorted.slice(0,k);
    }
}
