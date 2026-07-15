class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a,b) => a - b)
        let target = 1;
        for(const num of nums) {
            if(num === target) {
                target++;
            }
        }
        return target;
    }
}
