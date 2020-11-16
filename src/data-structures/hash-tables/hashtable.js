"use strict";
exports.__esModule = true;
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this._data = new Array(size);
    }
    HashTable.prototype.get = function (key) {
        var address = this._hash(key);
        var currentBucket = this._data[address];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    };
    HashTable.prototype.set = function (key, value) {
        var address = this._hash(key);
        if (!this._data[address]) {
            this._data[address] = [];
        }
        this._data[address].push([key, value]);
    };
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.toString().length; i++) {
            hash =
                (hash + key.toString().charCodeAt(i) + i) % this._data.length;
        }
        return hash;
    };
    HashTable.prototype.keys = function () {
        var keys = [];
        if (this._data) {
            for (var i = 0; i < this._data.length; i++) {
                var bucket = this._data[i];
                if (bucket) {
                    for (var i_1 = 0; i_1 < bucket.length; i_1++) {
                        var key = bucket[i_1][0];
                        keys.push(key);
                    }
                }
            }
        }
        return keys;
    };
    return HashTable;
}());
var myHashTable = new HashTable(4);
myHashTable.set("grapesss", 10000);
myHashTable.set("grapes", 10000);
myHashTable.set("lemons", 70);
myHashTable.set("oranges", 500);
var myHashTable2 = new HashTable(4);
myHashTable2.set(133, "apples");
myHashTable2.set(2324, "carrots");
console.log(myHashTable2.keys());
console.log(myHashTable.keys());
