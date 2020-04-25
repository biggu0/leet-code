var rotate = function(nums, k) {
    while(k > 0) {
        nums.splice(0, 0, nums[nums.length - 1] );
        nums.splice(nums.length - 1, 1);
        k--;
    }
};