# Check Sum Zero - Two Pointer Approach

This project is part of my **21 Days of DSA using JavaScript** challenge.

## 🚀 Problem Statement

**Given a sorted array of integers**, determine if there exists a pair of numbers such that their sum equals zero.

### Example

```js
Input: [-5, -4, -3, -2, 0, 2, 4, 6, 8]
Output: [-4, 4]

🧠 Approach

Initially solved using the brute force approach (O(n²)), but then optimized it using the Two Pointer Technique, reducing time complexity to O(n).

Two Pointer Explanation

Start with two pointers: left at the beginning and right at the end of the array.

Calculate the sum of the values at both pointers.

If the sum is 0, return or log the pair.

If the sum is greater than 0, move the right pointer leftward.

If the sum is less than 0, move the left pointer rightward.


💻 Code

function checkSum(array) {
  let left = 0;
  let Right = array.length - 1;

  while (left < Right) {
    let sum = array[left] + array[Right];
    if (sum === 0) {
      console.log(array[left], array[Right]);
      return [array[left], array[Right]];
    } else if (sum > 0) {
      Right--;
    } else {
      left++;
    }
  }
}

let result = checkSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

📈 Time Complexity

Time: O(n) — Linear

Space: O(1) — Constant


✅ Why This is Better

More efficient for large datasets.

Uses constant space.

Demonstrates a real-world use of the two-pointer pattern, a critical technique in technical interviews.


📚 Tags

#DSA #JavaScript #TwoPointer #TimeComplexity #ProblemSolving #21DaysOfDSAinJS

Feel free to fork, star ⭐ the repo, or use this template in your own DSA journey.
