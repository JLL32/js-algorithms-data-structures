"use strict";
// @param: Array
// @returns: first repeating element
exports.__esModule = true;
// O(n^2)
var firstRepeating_naive = function (elements) {
    for (var i = 0; i < elements.length; i++) {
        for (var j = i + 1; j < elements.length; j++) {
            if (elements[i] == elements[j]) {
                return elements[i];
            }
        }
    }
    return undefined;
};
var firstRepeating = function (elements) {
    var hashTable = new Map();
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i];
        if (hashTable.get(key)) {
            return key;
        }
        hashTable.set(key, true);
    }
    return undefined;
};
console.log(firstRepeating_naive("Hamalaya".split("")));
console.log(firstRepeating("Hamalaya".split("")));
