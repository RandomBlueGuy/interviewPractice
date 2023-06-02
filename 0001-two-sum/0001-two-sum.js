/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let j = 0 ; j < nums.length ; j++){
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[j] + nums[i] === target && j !== i){
                return [j , i];
            }
        }
    }
};