/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var dupes = {};
    var originalLength = nums.length

    for (var i = 0; i < originalLength; i++) {

        if (!dupes[nums[i]]) {
            dupes[nums[i]] = true;
        }
        else {
            nums.splice(i, 1);
            i--;
            originalLength--;
        }
    }
    return nums.length;
};