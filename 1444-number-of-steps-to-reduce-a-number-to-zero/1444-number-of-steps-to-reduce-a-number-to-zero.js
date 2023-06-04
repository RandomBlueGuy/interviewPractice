/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let newNum = num;
    
    while (newNum > 0){
        newNum = newNum % 2 === 0 ? newNum / 2 : newNum - 1;
        steps = steps + 1;
    }

    return steps;
};