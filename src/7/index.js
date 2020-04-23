/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numsArr = [];
    let ifNegative = x < 0;
    x = Math.abs(x);
    while(x> 0) {
        numsArr.push(x % 10);
        x = parseInt(x / 10);
    }
    let num = Number(numsArr.join(''));
    if (num > 2147483647 || num < -2147483648) return 0;
    return ifNegative ? 0 - num : num;
};