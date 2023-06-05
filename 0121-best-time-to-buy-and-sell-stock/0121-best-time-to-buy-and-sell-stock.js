/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = prices[0];
    let highestPofit = 0;

    for(let i = 0 ; i < prices.length ; i++) {
        if(lowestPrice >= prices[i]){
            lowestPrice = prices[i];
        } 
        if(prices[i] - lowestPrice > highestPofit ){
            highestPofit = prices[i] - lowestPrice;
        }
    }

    return highestPofit



}; 