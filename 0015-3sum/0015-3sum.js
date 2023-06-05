/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const resArr = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    resArr.push([nums[i], nums[left], nums[right]]);

                    // Skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return resArr;
};


// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const resArr = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i === 0 || nums[i] !== nums[i - 1]) {
//             for (let j = i + 1; j < nums.length - 1; j++) {
//                 if (j === i + 1 || nums[j] !== nums[j - 1]) {
//                     for (let k = j + 1; k < nums.length; k++) {
//                         if (k === j + 1 || nums[k] !== nums[k - 1]) {
//                             const sum = nums[i] + nums[j] + nums[k];
//                             if (sum === 0) {
//                                 resArr.push([nums[i], nums[j], nums[k]]);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     return resArr;
// };
