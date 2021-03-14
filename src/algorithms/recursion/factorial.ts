function factorialRecursive(n: number): number {
	if (n == 2)
		return 2;
	return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(6) == 720);
