/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return JSON.stringify(nums) !== JSON.stringify([...new Set(nums)])
};