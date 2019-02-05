## Stack / Queue

Stacks and queues are special cases of the idea of a collection that have *opinions* about the order in which elements can be inserted and removed from it.

### Stack

In computer science, **a stack is an abstract data type that serves as a collection of elements, with two principal operations**:

- **push**, which *adds an element to the collection*, and
- **pop**, which *removes the most recently added element that was not yet removed*.

The order in which elements come off a stack gives rise to its alternative name, **LIFO** (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

A common example people use is is a stack of plates.

So for a stack the most recently added item is also the most recently exited item.

[Data visualization](https://www.cs.usfca.edu/~galles/visualization/StackArray.html)

Pseudocode for stack:
```js
const stack = [1,2,3,4];

stack.push(5) // [1,2,3,4,5]
stack.pop() // [1,2,3,4]
```

### Queue

In computer science, **a queue is an abstract data type that serves as a collection of elements, with two principal operations**:

- **enqueue**, which is the *addition of entities to the rear terminal position*, and
- **dequeue**, which is the *removal of entities from the front terminal position*.

This makes the queue a **First-In-First-Out** (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a **linear data structure, or more abstractly a sequential collection**.

A common example people use is waiting in a line for something.

So you always take the oldest item of the queue.

[Data visualization](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html)

Pseudocode for queue:
```js
const queue = [1,2,3,4];

stack.enqueue(5) // [1,2,3,4,5]
stack.dequeue() // [2,3,4,5]
```
