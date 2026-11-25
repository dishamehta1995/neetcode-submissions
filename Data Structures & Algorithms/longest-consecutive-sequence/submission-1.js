class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set(nums);
        let count = 0;
        for(let i = 0;i<nums.length;i++){
            if(!map.has(nums[i]-1)){
                let length = 1;
                while(map.has(nums[i]+length)){
                    length++
                }
                count = Math.max(count,length)
            }
        }
        return count;
    }
}
