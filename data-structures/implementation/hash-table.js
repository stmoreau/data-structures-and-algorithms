/** Class representing a Hash Table */

class HashTable {
    constructor(val) {
        this._storage = [];
        this._tableSize = val;
        this._count = 0;
    }
    /*
     * Inserts a new key-value pair
     * @param {string} key - the key associated with the value
     * @param {*} value - the value to insert
     */
    insert(key, value) {
        const index = this._hash(key, this._tableSize);
        let arrayAtIndex = this._storage[index];

        if (!arrayAtIndex) {
            arrayAtIndex = [];
            this._storage[index] = arrayAtIndex;
        }

        let override = false;
        for (let i = 0; i < arrayAtIndex.length; i++) {
            let tuple = arrayAtIndex[i];
            if (tuple[0] === key) {
                tuple[1] = value;
                override = true;
            }
        }

        if (!override) {
            arrayAtIndex.push([key, value]);
            this._count++;
            if (this._count > this._tableSize * 0.75) {
                this._resize(this._tableSize * 2);
            }
        }
    }
    /*
     * Deletes a key-value pair
     * @param {string} key - the key associated with the value
     * @return {*} value - the deleted value
     */
    remove(key) {
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];

        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                const keyValueArray = arrayAtIndex[i];
                if (keyValueArray[0] === key) {
                    arrayAtIndex.splice(i, 1);
                    this._count--;
                    if (this._count < this._tableSize * 0.25) {
                        this._resize(this._tableSize / 2);
                    }
                    return keyValueArray[1];
                }
            }
        }
    }
    /*
     * Returns the value associated with a key
     * @param {string} key - the key to search for
     * @return {*} - the value associated with the key
     */
    retrieve(key) {
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];

        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                const keyValueArray = arrayAtIndex[i];
                if (keyValueArray[0] === key) return keyValueArray;
            }
        }
    }
    /*
     * Hashes string value into an integer that can be mapped to an array index
     * @param {string} str - the string to be hashed
     * @param {number} n - the size of the storage array
     * @return {number} - an integer between 0 and n
     */
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++)
            sum += str.charCodeAt(i) * 3

        return sum % n;
    }

    /*
     * Resizes the hash table
     * @param {number} n - the new size
     */
    _resize(newSize) {
        const oldStorage = this._storage;

        this._tableSize = newSize;
        this._count = 0;
        this._storage = [];

        oldStorage.forEach(bucket => {
            if (bucket) {
                for (let i = 0; i < bucket.length; i++) {
                    let tuple = bucket[i];
                    this.insert(tuple[0], tuple[1]);
                }
            }
        });
    };
}

const myHT = new HashTable(25);

myHT.insert('a', 1);
myHT.insert('b', 2);

console.log(myHT);

console.log(myHT.retrieve('a'));
console.log(myHT.retrieve('b'));
console.log(myHT.retrieve('c'));

console.log(myHT.remove('a'));

console.log(myHT);