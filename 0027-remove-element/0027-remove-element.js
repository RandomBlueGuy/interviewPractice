/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val){
            k += 1;
        } else {
           nums[i] = "_"
        }
    }
    nums.sort()
    return k;
};