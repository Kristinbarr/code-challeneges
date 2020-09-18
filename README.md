# CODE CHALLENGE PRACTICE

A place to keep various coding challenges I have completed with solutions.

## TABLE OF CONTENTS

| JavaScript                                              | Python                                |
| ------------------------------------------------------- | ------------------------------------- |
|                                                         | [Palindrom-Number](#palindrom-number) |
| [Zigzag Conversion](#zigzag-conversion)                 |                                       |
| [Next Permutation](#next-permutation)                   |                                       |
| [Reverse Integer](#reverse-integer)                     | [Reverse Integer](#reverse-integer)   |
| [Two Sum](#two-sum)                                     |                                       |
|                                                         | [Add Two Numbers](#add-two-numbers)   |
| [Adjacent Elements Product](#adjacent-elements-product) |                                       |

---

## PROBLEMS LIST

### Palindrome Number

Task:

Example:

🔗 [Link to Challenge (Leetcode)](https://leetcode.com/problems/palindrome-number)

### Zigzag Conversion

Task:
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

Example:

| Input                             | Output           |
| --------------------------------- | ---------------- |
| s = "PAYPALISHIRING", numRows = 3 | "PAHNAPLSIIGYIR" |
| s = "PAYPALISHIRING", numRows = 4 | "PINALSIGYAHRPI" |

```
P     I    N
A   L S  I G
Y A   H R
P     I
```

🔗 [Link to Challenge (Leetcode)](https://leetcode.com/problems/zigzag-conversion/)

👀 [See My JavaScript Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/zigzag-conversion.js)

---

### Next Permutation

Task:

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such arrangement is not possible, it must be rearranged as the lowest possible order (ie, sorted in ascending order). The replacement must be in-place and use only constant extra memory.

Example:

| Input | Output |
| ----- | ------ |
| 1,2,3 | 1,3,2  |
| 3,2,1 | 1,2,3  |
| 1,1,5 | 1,5,1  |

🔗 [Link to Challenge (Leetcode)](https://leetcode.com/problems/next-permutation/)

👀 [See My JavaScript Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/next-permutation.js)

---

### Reverse Integer

Task:
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Example:

| Input | Output |
| ----- | ------ |
| 123   | 321    |
| -123  | -321   |
| 120   | 21     |

Note:

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

🔗 [Link to Challenge (Leetcode)](https://leetcode.com/problems/reverse-integer)

👀 [See My JavaScript Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/reverse-integer.js)

👀 [See My Python Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/reverse-integer.py)

---

### Two Sum

Task:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

| Input                                 | Output   |
| ------------------------------------- | -------- |
| nums = `[2, 7, 11, 15]`, target = `9` | `[0, 1]` |

Note:

Make sure you are returning the _indicies_ of the values, not the values themselves.

🔗 [Link to Challenge (LeetCode)](https://leetcode.com/problems/two-sum/)

👀 [See My JavaScript Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/two-sum.js)

---

### Add Two Numbers

Task:

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

| Input                                  | Output        | Explaination      |
| -------------------------------------- | ------------- | ----------------- |
| nums = `(2 -> 4 -> 3) + (5 -> 6 -> 4)` | `7 -> 0 -> 8` | `342 + 465 = 807` |

🔗 [Link to Challenge (LeetCode)](https://leetcode.com/problems/add-two-numbers/)

👀 [See My JavaScript Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/add-two-numbers.js)

---

### Adjacent Elements Product

Task:

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example:

| Input                  | Output |
| ---------------------- | ------ |
| `[3, 6, -2, -5, 7, 3]` | `21`   |

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

🔗 [Link to Challenge (CodeSignal)](https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m)

👀 [See my JavaScript Solution](https://github.com/Kristinbarr/code-challenges/blob/master/Solutions/adjacent-elements-product.js)

---
