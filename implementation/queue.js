/** Class representing a Queue. 
 * @constructor
 */

class Queue {

    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }
    /*
     * Enqueues a new value at the end of the queue
     * @param {*} value the value to enqueue
     */
    enqueue(value) {
        this._storage[this._length + this._headIndex] = value;
        this._length++;
    }

    /*
     * Dequeues the value from the beginning of the queue and returns it
     * @return {*} the first and oldest value in the queue
     */
    dequeue() {
        let retValue;
        if (this._length) {
            retValue = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
        }
        return retValue;
    }
    /*
     * Returns the value at the beginning of the queue without removing it from the queue
     * @return {*} the first and oldest value in the queue
     */
    peek() {
        let retValue;
        if (this._length > 0) {
            retValue = this._storage[this._headIndex];
        }
        return retValue;
    }
}

const myQueue = new Queue();

myQueue.enqueue('zero');
myQueue.enqueue('one');
myQueue.enqueue('two');

console.log(myQueue);

myQueue.dequeue();

console.log(myQueue);

myQueue.enqueue('three');

console.log(myQueue);