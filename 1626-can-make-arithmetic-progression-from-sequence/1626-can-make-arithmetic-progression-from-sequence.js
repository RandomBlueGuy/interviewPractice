/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a-b)
    
    if (arr.length <= 1) {
        return false
    }
    
    const currentAP = Math.abs(arr[1] - arr[0]);

    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] + currentAP !== arr[i+1]){
            return false
        }
    }
    return true;
};