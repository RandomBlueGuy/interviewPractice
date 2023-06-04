/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = 0;
    const reduced = nums.map((item, index) => {
        if (index === 0 ){
            val = fn(init, item)
        }else {
            val = fn(val, item)
        }
    });
   return reduced.length === 0 ? init : val
};