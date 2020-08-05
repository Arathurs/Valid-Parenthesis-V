# Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

# Solution

This verbose solution beats up to 99.9% of other javascript submissions on Leetcode for the same problem. Constants are also used to store strings to enhance legibility and minimize errors.

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