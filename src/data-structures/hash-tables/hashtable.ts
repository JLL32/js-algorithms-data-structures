class HashTable<K, V> {
    private _data: [K, V][][];
    constructor(size: number) {
        this._data = new Array(size);
    }

    get(key: K): V {
        let address = this._hash(key);
        const currentBucket = this._data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    set(key: K, value: V) {
        let address = this._hash(key);
        if (!this._data[address]) {
            this._data[address] = [];
        }
        this._data[address].push([key, value]);
    }

    private _hash(key: K): number {
        let hash = 0;
        for (let i = 0; i < key.toString().length; i++) {
            hash =
                (hash + key.toString().charCodeAt(i) + i) % this._data.length;
        }
        return hash;
    }

    keys(): K[] {
        const keys: K[] = [];
        if (this._data) {
            for (let i = 0; i < this._data.length; i++) {
                const bucket = this._data[i];
                if (bucket) {
                    for (let i = 0; i < bucket.length; i++) {
                        const key = bucket[i][0];
                        keys.push(key);
                    }
                }
            }
        }
        return keys;
    }
}

const myHashTable: HashTable<string, number> = new HashTable(4);
myHashTable.set("grapesss", 10000);
myHashTable.set("grapes", 10000);
myHashTable.set("lemons", 70);
myHashTable.set("oranges", 500);

const myHashTable2: HashTable<number, string> = new HashTable(4);
myHashTable2.set(133, "apples");
myHashTable2.set(2324, "carrots");

console.log(myHashTable2.keys());
console.log(myHashTable.keys());
export {};
