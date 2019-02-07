/** Class representing a Stack. */

class Stack {

    constructor() {
        this._storage = {};
        this._legth = 0;
    }
    /*
     * Adds a new value at the end of the stack
     * @param {*} value - the value to push
     */
    push(value) {
        this._storage[this._legth] = value;
        this._legth++;
    }

    /*
     * Removes the value at the end of the stack and returns it
     * @return {*} the last and newest value in the stack
     */
    pop() {
        let retValue;
        if (this._legth) {
            retValue = this._storage[this._legth - 1];
            delete this._storage[this._legth - 1];
            this._legth--;
        }
        return retValue;
    }
    /*
     * Returns the value at the end of the stack without removing it
     * @return {*} the last and newest value in the stack
     */
    peek() {
        let retValue;
        if (this._legth) {
            retValue = this._storage[this._legth - 1];
        }
        return retValue;
    }
}

const myStack = new Stack();

myStack.push('zero');
myStack.push('one');
myStack.push('two');
myStack.push('three');

console.log(myStack);

myStack.pop();

console.log(myStack);

myStack.peek();

console.log(myStack);