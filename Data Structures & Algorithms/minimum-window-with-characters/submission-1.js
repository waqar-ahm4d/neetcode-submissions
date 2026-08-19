class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (s.length < t.length) return "";

    const countT = new Map();
    const window = new Map();

    for (let c of t) {
      countT.set(c, (countT.get(c) || 0) + 1);
    }

    let have = 0;
    let need = countT.size;
    let res = [-1, -1];
    let resLen = Infinity;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      window.set(c, (window.get(c) || 0) + 1);

      if (countT.has(c) && window.get(c) === countT.get(c)) {
        have++;
      }

      while (have === need) {
        if (r - l + 1 < resLen) {
          res = [l, r];
          resLen = r - l + 1;
        }

        let leftChar = s[l];
        window.set(leftChar, window.get(leftChar) - 1);

        if (countT.has(leftChar) && window.get(leftChar) < countT.get(leftChar)) {
          have--;
        }
        l++;
      }
    }

    return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1);
  }
}
