/** Class representing a Linked List */

class LinkedList {

    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
    }
    /*
     * Inserts a new value to the end of the linked list
     * @param {*} value - the value to insert
     */
    insert(value) {
        const node = {
            value,
            next: null
        }
        this.tail.next = node;
        this.tail = node;
    }
    /*
     * Deletes a node
     * @param {*} value - the value of the node to remove
     * @return {*} node - the deleted node
     */
    remove(value) {
        let prevNode = null;
        let currNode = this.head;

        while (currNode) {
            if (currNode.value === value) {
                break;
            }

            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            return undefined;
        }

        if (this.head === currNode) {
            this.head = currNode.next;
        } else {
            prevNode.next = currNode.next;
        }

        return currNode;
    }
    /*
     * Removes the value at the end of the linked list
     * @return {*} - the removed value
     */
    removeTail() {
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }
    /*
     * Searches the linked list and returns true if it contains the value passed
     * @param {*} value - the value to search for
     * @return {boolean} - true if value is found, otherwise false
     */
    contains(value) {
        let currentNode = this.head;
        while (currentNode.value !== value && currentNode !== this.tail) {
            currentNode = currentNode.next;
        }
        return currentNode.value === value;
    }
    /*
     * Checks if a node is the head of the linked list 
     * @param {{prev:Object|null, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the head, otherwise false
     */
    isHead(node) {
        return node === this.head;
    }
    /*
     * Checks if a node is the tail of the linked list 
     * @param {{prev:Object|null, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the tail, otherwise false
     */
    isTail(node) {
        return node === this.tail;
    }
}

const myList = new LinkedList(1);

myList.insert(2);
myList.insert(3);
console.log(myList);

myList.remove(2);
console.log(myList);

myList.removeTail();
console.log(myList);


myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
console.log(myList);

console.log(myList.contains(2));
console.log(myList.contains(5));
console.log(myList.contains(7));