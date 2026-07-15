class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        let longest = 0;
        for(let i = 0; i <= nums.length; i++) {
            let current = nums[i];
            let length = 1;
            while(nums.includes(current+1)) {
                current++;
                length++;
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}
