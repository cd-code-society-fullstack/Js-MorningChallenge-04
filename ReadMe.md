**Problem Statement**

You are required to create a function named `wuTang(n)` that returns an array of strings following certain rules based on the divisibility of the index `i` (1-indexed):

- If `i` is divisible by both 3 and 5, the `i`th element of the array should be "WuTang".
- If `i` is divisible by 3, the `i`th element of the array should be "Wu".
- If `i` is divisible by 5, the `i`th element of the array should be "Tang".
- If none of the above conditions are met, the `i`th element of the array should be `i` converted to a string.

The `wuTang` function accepts one parameter:
1. `n` (1 ≤ n ≤ 10^4): an integer value.

Here are some examples:

- `wuTang(3)` should return `["1","2","Wu"]`.

{Try It!}(node .guides/01/try-it-01.js)

- `wuTang(5)` should return `["1","2","Wu","4","Tang"]`.

{Try It!}(node .guides/01-WuTang/try-it-02.js)

- `wuTang(15)` should return `["1","2","Wu","4","Tang","Wu","7","8","Tang","Wu","11","Tang","13","14","WuTang"]`.

{Try It!}(node .guides/secure/01-WuTang/try-it-03.js)

**Hint**

Use a loop to iterate from 1 to `n` and use the modulus operator `%` to check divisibility. Use conditional (if-else) statements to handle the different cases.

## Submit 

**Test Runner**
```
node .guides/secure/01-WuTang/testRunner.js
3 -> ["1","2","Wu"]
5 -> ["1","2","Wu","4","Tang"]
15 -> ["1","2","Wu","4","Tang","Wu","7","8","Tang","Wu","11","Tang","13","14","WuTang"]
```

Sure, let's build on the Wu-Tang problem, but add a bit more complexity:

# Super WuTang Challenge

Given two integers `n` and `m`, return an array where:

- Each element at index `i` (1-indexed) is "SuperWuTang" if `i` is divisible by `n` and `m`.
- The element is "SuperWu" if `i` is divisible by `n`.
- The element is "SuperTang" if `i` is divisible by `m`.
- The element is `i` (as a string) if none of the above conditions are true.

## Example 

```
Input: n = 2, m = 5, limit = 10
Output: ["1", "SuperWu", "3", "SuperWu", "SuperTang", "SuperWu", "7", "SuperWu", "SuperTang", "SuperWuTang"]
```

In this example, the numbers 2, 4, 6, 8, 10 are divisible by 2, so "SuperWu" is inserted at those indices. The numbers 5 and 10 are divisible by 5, so "SuperTang" is inserted at those indices. The number 10 is divisible by both 2 and 5, so "SuperWuTang" is inserted at that index. For all other indices, the number itself is inserted.

## Constraints

1 <= n, m <= 10^4

This problem challenges students to write code that can handle multiple conditions and perform calculations based on those conditions. It also requires them to iterate over a range of numbers, which is a fundamental concept in programming.