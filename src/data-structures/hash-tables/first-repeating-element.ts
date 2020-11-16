// @param: Array
// @returns: first repeating element

// O(n^2)
const firstRepeating_naive = function <T>(elements: T[]): any {
    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            if (elements[i] == elements[j]) {
                return elements[i];
            }
        }
    }
    return undefined;
};


const firstRepeating = function <T>(elements: T[]): any {
    const hashTable = new Map();
    for (let i = 0; i < elements.length; i++) {
        const key = elements[i];
        if (hashTable.get(key)) {
            return key;
        }
        hashTable.set(key, true);
    }
    return undefined;
}

console.log(firstRepeating_naive<string>("Hamalaya".split("")));
console.log(firstRepeating<string>("Hamalaya".split("")));
export {};
