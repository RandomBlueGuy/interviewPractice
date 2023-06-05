/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {

    if(nums.includes(0)){
        return 0
    }
    
    const signFunc = (x) => {
        return x > 0 ? 1 : -1;
    }
    
    return nums.map((num) => signFunc(num)).reduce((a,b) => a*b)
};