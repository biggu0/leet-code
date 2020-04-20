/**
 * @param {number[]} prices
 * @return {number}
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 */

// solution 0
var maxProfit = function(prices) {
    let len = prices.length;
    let salePrices = new Array(len);
    salePrices.push(0);
    for(var i = 0; i < len; i++) {
        salePrices[i] = (Math.max(...prices.slice(i+1, len)) - prices[i]);
    }
    return Math.max(...salePrices);
};