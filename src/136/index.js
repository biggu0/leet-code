/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [2,2,1]
 * 输出: 1
 */
var singleNumber = function(nums) {
    let num = nums[0];
    let len = nums.length;
    let temp;
    for (var i = 1; i < len; i++) {
        temp = nums[i];
        delete nums[i];
        if (nums.indexOf(temp) === -1) {
            num = temp;
            break;
        }
        else {
            nums[i] = temp;
        }
    }
    return num;
};