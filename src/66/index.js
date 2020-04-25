/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    let flag = true;
    while(flag && i >= 0) {
        digits[i] = digits[i] + 1;
        if(digits[i] >= 10) {
            digits[i] = digits[i] % 10;
            if (i === 0) {
                digits.splice(0, 0, 1); //为什么不能用unshift
            }
            i--;
        }
        else {
            flag = false;
        }
    }
    return digits;
};