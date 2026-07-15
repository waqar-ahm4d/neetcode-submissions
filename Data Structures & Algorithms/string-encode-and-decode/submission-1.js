class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(const str of strs){
            encoded += str.length + '#' + str
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.slice(i, j));
            const s = str.slice(j + 1, j + 1 + length);
            decoded.push(s);
            i = j + 1 + length; 
        }
        return decoded;
    }
}
