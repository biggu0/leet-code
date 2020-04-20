/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let len = prices.length;
    for(var i = 0; i < len; i++) {
        let  j = i + 1;
        if (j < len && prices[j] > prices[i]) {
            profit += prices[j] - prices[i]
        }
    }
    return profit;
};