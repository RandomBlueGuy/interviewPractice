/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const newArr = [];
    // nums.sort().map((numsMap, index) => {
    //     if(nums.filter((num) => num === numsMap).length);
    // })
    for (let i = 0 ; i < nums.length ; i++){
        if(!newArr.map((obj) => obj.number === nums[i]).includes(true)){
            newArr.push({number: nums[i], repetitions: nums.filter((num) => num === nums[i]).length})
        }

    }

    return newArr.sort((a , b) => b.repetitions - a.repetitions ).slice(0,k).map(obj => obj.number)
};