class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  // Sliding Window with Map
  lengthOfLongestSubstring(s) {
    const charMap = new Map();

    let l = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {
      const char = s[r];

      if (charMap.has(char) && charMap.get(char) >= l) {
        l = charMap.get(char) + 1;
      }
      charMap.set(char, r);
      maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
  }
}
