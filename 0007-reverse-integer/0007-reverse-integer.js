/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const arrayX = `${x}`.split("").reverse();
    const reversedX = arrayX.includes("-") ? -parseInt(arrayX.join("")) : parseInt(arrayX.join(""));
    return Number.isSafeInteger(reversedX) && reversedX >= -2147483648 && reversedX <= 2147483647 
    ? reversedX
    : 0 

};