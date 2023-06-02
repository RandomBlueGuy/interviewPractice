/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const newArr = [];
    for(let i = 0 ; i < arr.length ; i+0){
        newArr.push(arr.slice(i, i +
        size))
        i = i + size 
    }
    return newArr
};