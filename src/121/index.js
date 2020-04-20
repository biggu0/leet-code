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

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    let minP = prices[0];
    let profit = 0;
    for(var i = 1; i < len; i++) {
        minP = Math.min(minP, prices[i]);
        profit = Math.max(prices[i] - minP, profit);
    }
    return profit;
};