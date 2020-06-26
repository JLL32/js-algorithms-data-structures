/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n^2)
const maxSubArraySlow = function (nums) {
    let sum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let tempsum = 0;
        for (let j = i; j >= 0; j--) {
            tempsum += nums[j];
            if (tempsum > sum) {
                sum = tempsum;
            }
        }
    }
    return sum;
};

// O(n)
const maxSubArray = function (nums) {
    let sum = nums[0];
    let tempSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        tempSum = Math.max(nums[i] + tempSum, nums[i]);
        sum = Math.max(tempSum, sum);
    }
    return sum;
};

console.log(maxSubArray([-2, 1, 3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-1, 0, 0, 0, 0]));
console.log(maxSubArray([0, 0, 0, 0]));
console.log(maxSubArray([0, 0, 0, 0, -1]));

