## Hash Table

A hash table (hash map) is a **data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found**.

A **hash function** is *any function that can be used to map data of arbitrary size to data of a fixed size*. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes.

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash **collisions** where *the hash function generates the same index for more than one key*. Such collisions must be accommodated in some way.

As a general rule of thumb it is good practice (and mathematically proven) that when your data structure is half-full you have to double its size.

| Pros          | Cons                        |
|---------------|-----------------------------|
| Fast lookups  | Slow worst-case lookups     |
| Flexible keys | Unordered                   |
|               | Single-directional lookups  |

*Tip*:
When you're thinking about optimizing a problem that requires a fast look-up your mind should always go to Hash Table

Implementation:
- [Starting point](https://repl.it/@stmoreau/hash-table-prompt)
- [Ending point](https://repl.it/@stmoreau/hash-table-prompt-ending) - [local JS file](implementation/hash-table.js)

---
Common Interview Questions:

- [Count the number of occurences of all characters or words in a body of text or string](https://repl.it/@stmoreau/ht-unique-string-prompt) - [solution](https://www.geeksforgeeks.org/determine-string-unique-characters/)
- [Remove duplicates in a list](https://repl.it/@stmoreau/ht-remove-dups-prompt) - [solution](https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/)
- [Find a unique value in a list](https://repl.it/@stmoreau/ht-find-unique-list-prompt) - [solution](https://www.geeksforgeeks.org/non-repeating-element/)
- [Find if two integers in a list add up to k](https://repl.it/@stmoreau/ht-two-items-sum) - [solution](https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/)