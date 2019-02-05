## Array / String

When we think about strings we should think about them as arrays of characters.

Strings are immutable, which means that if you're doing any string operation such as changing a string you're copying a string with that change and this has space complexity implications.

| Pros          | Cons          |
|---------------|---------------|
| Fast lookups  | Slow insert   |
| Fast appends  | Slow deletes  |
