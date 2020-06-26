const mergeSortedArrays = function (array1, array2) {
	const result = [];
	let i = 0, j = 0;
	while (array1[i] || array2[i]) {
		if (!array2[j] || array1[i] < array2[j]) {
			result.push(array1[i]);
			i++;
		}
		else {
			result.push(array2[j]);
			j++;
		}
	}
	return result;
};

console.log(mergeSortedArrays([1, 8, 5, 100], [7, 9, 11]));
