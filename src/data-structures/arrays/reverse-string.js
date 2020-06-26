function reverseString(string) {
	const chars = new Array(string.length);
	const last = string.length - 1;

	for (let i = last; i >= 0; i--) {
		chars.push(string[i]);
	}
	return chars.join('');
}

console.log(reverseString("heeelooo"));
