## Stack / Queue

Stacks and queues are special cases of the idea of a collection that have *opinions* about the order in which elements can be inserted and removed from it.

### Stack

A stack is **an abstract data type that serves as a collection of elements, with two principal operations**:

- **push**, which *adds an element to the collection*, and
- **pop**, which *removes the most recently added element that was not yet removed*.

The order in which elements come off a stack gives rise to its alternative name, **LIFO** (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

A common example people use is is a stack of plates.

So for a stack the most recently added item is also the most recently exited item.

[Visualization](https://www.cs.usfca.edu/~galles/visualization/StackArray.html)

Pseudocode for stack:
```js
const stack = [1,2,3,4];

stack.push(5) // [1,2,3,4,5]
stack.pop() // [1,2,3,4]
```

Common use cases:

**Text Editor**: The undo feature in a any text editor is a classic example of stack. Whatever you do in a text editor is saved in a data structure and when you undo them, the same activities are undone based on Last In First Out Order (LIFO).

**Web Browsers**: Whatever you browse in a particular tab is saved in a stack, whenever you try to go back to the last visited page the tab stack outputs the last visited pages in last in first out order.

Implementation:
- [Starting point](https://repl.it/@stmoreau/stack-prompt)
- [Ending point](https://repl.it/@stmoreau/stack-prompt-ending) - [local JS file](implementation/stack.js)

### Queue

A queue is **an abstract data type that serves as a collection of elements, with two principal operations**:

- **enqueue**, which is the *addition of entities to the rear terminal position*, and
- **dequeue**, which is the *removal of entities from the front terminal position*.

This makes the queue a **First-In-First-Out** (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a **linear data structure, or more abstractly a sequential collection**.

A common example people use is waiting in a line for something.

So you always take the oldest item of the queue.

[Visualization](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html)

Pseudocode for queue:
```js
const queue = [1,2,3,4];

stack.enqueue(5) // [1,2,3,4,5]
stack.dequeue() // [2,3,4,5]
```

Common use cases:

When multiple people are accessing the same website for some file, the file is provided to them using First Come First Serve (FCFS) basis and it can be implemented using queue.

When you put multiple file in a print queue, the files get printed based on FCFS format and it can be implemented using queue.

Incoming email in inbox is also implemented using queue data structure.

Implementation:
- [Starting point](https://repl.it/@stmoreau/queue-prompt)
- [Ending point](https://repl.it/@stmoreau/queue-prompt-ending) - [local JS file](implementation/queue.js)
