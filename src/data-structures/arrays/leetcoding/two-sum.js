/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const complements = {};
	let pair = [];
	nums.forEach(function onNums(value, index, list) {
		complements[target - value] = index;
	});
	for (let index = 0; index < nums.length; index++) {
		const value = nums[index];
		if (complements[value] !== undefined &&
			complements[value] !== index) {
			pair = [index, complements[value]];
			break;
		}
	}
	return pair;
};

console.log(twoSum([3, 2, 5, 15, 3], 6));
