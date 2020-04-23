/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let steps = 0
    for(var i = 0; steps < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums[i]);
            nums.splice(i, 1);
            i = i -1;
        }
        steps++;
    }
};