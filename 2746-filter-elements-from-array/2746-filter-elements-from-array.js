/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArr = []
    arr.map((item, index) => {if(fn(item, index)) {newArr.push(item)}})
    return newArr
};