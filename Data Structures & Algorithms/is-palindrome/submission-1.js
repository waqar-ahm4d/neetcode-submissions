class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            while(l < r && !this.alphaNum(s[l])) {
                l++;
            }
            while(r > l && !this.alphaNum(s[r])) {
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            
            l++;
            r--;
        }
        return true;
    }
    alphaNum(ch) {
        return (
            (ch >= 'A' && ch <= 'Z' ) || 
            (ch >= 'a' && ch <= 'z') ||
            (ch >= '0' && ch <= '9')
        );
    }
}
