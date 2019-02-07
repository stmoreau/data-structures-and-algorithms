## Array / String

When we think about strings we should think about them as arrays of characters.

Strings are immutable, which means that if you're doing any string operation such as changing a string you're copying a string with that change and this has space complexity implications.

| Pros          | Cons          |
|---------------|---------------|
| Fast lookups  | Slow insert   |
| Fast appends  | Slow deletes  |

---
Common Interview Questions:

- [Rotate a matrix, string, or an array](https://repl.it/@stmoreau/rotate-array-prompt) - [solution](https://www.geeksforgeeks.org/array-rotation/)
- [Given an m x n boolean matrix, if an element is 0, set its entire row and column to 0](https://repl.it/@stmoreau/boolean-matrix-prompt) - [solution](https://www.geeksforgeeks.org/a-boolean-matrix-question/)
- [Search for a value](https://repl.it/@stmoreau/search-for-value-prompt) - [solution](https://www.geeksforgeeks.org/linear-search/)
- [Write a function that encodes a string by turning all spaces into `%20`](https://practice.geeksforgeeks.org/problems/urlify-a-given-string/0) - [solution](https://www.geeksforgeeks.org/urlify-given-string-replace-spaces/)
- [Merge 2 sorted lists into 1 list](https://repl.it/@stmoreau/merge-sorted-arrays-prompt) - [solution](https://www.geeksforgeeks.org/merge-two-sorted-arrays/)