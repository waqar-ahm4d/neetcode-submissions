class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const visited = new Array(strs.length).fill(false);
        const result = [];
        for(let i=0; i<strs.length; i++) {
            if(visited[i]) continue;
            const group = [strs[i]];
            const sortedI = strs[i].split('').sort().join('');
            for (let j=i+1; j<strs.length; j++) {
                if(!visited[j]) {
                    const sortedJ = strs[j].split('').sort().join('');
                    if(sortedI == sortedJ){
                        group.push(strs[j]);
                        visited[j] = true;
                    }
                }
            }
            result.push(group);
        }
        return result;
        

    }
}
