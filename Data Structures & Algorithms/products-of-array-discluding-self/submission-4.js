class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // 2 pointer - circular array solution - O(n*n)
    // const out = [];
    // for(let i=0;i<nums.length;i++){
    //     let res = 1;
    //     for(let j=1;j<nums.length;j++){
    //         res = res*nums[(i+j)%nums.length]
    //     }
    //     out.push(res);
    // }
    // return out;
    productExceptSelf(nums) {
        const out = new Array(nums.length).fill(1);
        let pre = 1;
        let post = 1;
        for(let i = nums.length-1;i>=0;i--){
            out[i] = out[i]*post;
            post = post*nums[i]

        }
        for(let i=0;i<nums.length;i++){
            out[i] = out[i]*pre
            pre = pre*nums[i]
        }
        return out
    } 
}

