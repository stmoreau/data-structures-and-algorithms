## Linked List

A Linked list is a **linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next**.

It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists.

| Pros                        | Cons           |
|-----------------------------|----------------|
| Fast operations on the ends | Costly lookups |
| Flexible size               |                |

[Visualization for Linked List](https://visualgo.net/en/list)

Pseudocode for a Linked List:
```js
const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  }
}
```
[Visualization for Doubly Linked List](https://visualgo.net/en/list)

Pseudocode for a Linked List Node:
```js
const linkedListNode = {
    value: 1,
    next: {POINTER},
    previous: {POINTER}
}
```

Common use cases of Linked List:

Least recently used cache (recent searches, popular videos etc.). You have some space allocated and as you add new searches you are adding into this data structure. Once you reach capacity, it needs to have an exit, so the least recently used will remove the oldest one.

Hash tables are using Linked List underneath.

Implementation:
- [Starting point](https://repl.it/@stmoreau/linked-list-prompt)
- [Ending point](https://repl.it/@stmoreau/linked-list-prompt-ending) - [local JS file](implementation/linked-list.js)

---
Common Interview Questions:

- Delete the following:
  - [a node in the middle of the linked list](https://repl.it/@stmoreau/ll-delete-mid-node-prompt) - [solution](https://www.geeksforgeeks.org/delete-middle-of-linked-list/)
  - [a node with only a variable pointing at that node](https://repl.it/@stmoreau/ll-delete-node-no-pointers-prompt) - [solution](https://www.geeksforgeeks.org/given-only-a-pointer-to-a-node-to-be-deleted-in-a-singly-linked-list-how-do-you-delete-it/)
  - [a duplicate](https://repl.it/@stmoreau/ll-delete-dupe-node-prompt) - [solution](https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/)
- [Partition a linked list around a value](https://repl.it/@stmoreau/ll-partition-prompt) - [solution](https://repl.it/@stmoreau/ll-partition-solution)
- [Write a function for reversing a linked list. Can you do it in-place?](https://repl.it/@stmoreau/ll-reverse-prompt) - [solution](https://repl.it/@stmoreau/ll-reverse-solution)
- [Check if a linked list contains a cycle](https://repl.it/@stmoreau/ll-cycle-detect-prompt) - [solution](https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/)
- [Find the kth to the last node](https://repl.it/@stmoreau/ll-kth-to-last-node-prompt) - [solution](https://repl.it/@stmoreau/ll-kth-to-last-node-solution)