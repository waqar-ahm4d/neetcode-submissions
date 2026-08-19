class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const count = new Array(26).fill(0);
    let l = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {
      const charCode = s.charCodeAt(r) - 65;
      count[charCode]++;
      maxFreq = Math.max(maxFreq, count[charCode]);

      if (r - l + 1 - maxFreq > k) {
        count[s.charCodeAt(l) - 65]--;
        l++;
      }
      maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
  }
}
