/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 求出等差数列的和，然后算出差
    let len = nums.length;
    let an = len - 1;
    let a1 = 1;
    if (an === 0 && nums[0] === 0) {
        return a1;
    }
    let totalSum = ((an + a1) * an) / 2;
    let actureSum = 0;
    nums.map(i => {
        actureSum += i;
    });
    let comparamSum = totalSum-actureSum;
    if (comparamSum === 0) {
        return len;
    }
    if (comparamSum < 0) {
        return len + comparamSum;
    }
    return  comparamSum;
};