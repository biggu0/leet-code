/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsMap = {}, flag = false;
    for(var i = 0; i < nums.length; i++){
        if(numsMap[nums[i]] >= 1) {
            flag = true;
            break;
        }
        if (numsMap[nums[i]] === undefined) {
            numsMap[nums[i]] = 1;
        }
    }
    return flag;
};