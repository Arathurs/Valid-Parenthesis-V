# Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

# Solution

This solution beats up to 99.9% other javascript submissions on Leetcode for the same problem. I also refactored this solution into a more verbose version with constants. It can be found in the file named isValidWithConstants.js.

#Example 1:

```
Input: "()"
Output: true
```

# Example 2:

```
Input: "()[]{}"
Output: true
```

# Example 3:

```
Input: "(]"
Output: false
```

# Example 4:

```
Input: "([)]"
Output: false
```

# Example 5:

```
Input: "{[]}"
Output: true
```