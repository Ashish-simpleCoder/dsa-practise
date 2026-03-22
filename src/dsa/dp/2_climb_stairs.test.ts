import { describe, it, expect } from "vitest";

/*

  You can climb 1 or 2 steps at a time.
  Find the number of distinct ways to reach the top.


  Input: n = 4
  Output: 5

  Ways:
  1+1+1+1
  1+1+2
  1+2+1
  2+1+1
  2+2
*/
function climbStairsWayCount(n: number) {
  if (n <= 2) return n;

  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function climbStairsWays(n) {
  const dp = [];

  dp[0] = [[]]; // base
  dp[1] = [[1]];

  for (let i = 2; i <= n; i++) {
    dp[i] = [];
    // console.log(dp[i], "---", dp);

    // from i-1 add 1 step
    for (const way of dp[i - 1]) {
      dp[i].push([...way, 1]);
    }

    // from i-2 add 2 step
    for (const way of dp[i - 2]) {
      dp[i].push([...way, 2]);
    }
  }

  return dp[n];
}

// Recursive solution
function climbWays(n) {
  if (n === 0) return [[]];
  if (n < 0) return [];

  const result = [];

  for (const way of climbWays(n - 1)) {
    result.push([...way, 1]);
  }

  for (const way of climbWays(n - 2)) {
    result.push([...way, 2]);
  }

  return result;
}

// Recursive solution with memoization
function climbWaysMemo(n, memo = {}) {
  if (n === 0) return [[]];
  if (n < 0) return [];

  if (memo[n]) return memo[n];

  const result = [];

  for (const way of climbWaysMemo(n - 1, memo)) {
    result.push([...way, 1]);
  }

  for (const way of climbWaysMemo(n - 2, memo)) {
    result.push([...way, 2]);
  }

  memo[n] = result;
  return result;
}

describe("climbStairsWayCount", () => {
  it("should return 1 for n = 1", () => {
    expect(climbStairsWayCount(1)).toBe(1);
  });

  it("should return 2 for n = 2", () => {
    expect(climbStairsWayCount(2)).toBe(2);
  });

  it("should return 3 for n = 3", () => {
    expect(climbStairsWayCount(3)).toBe(3);
  });

  it("should return 5 for n = 4", () => {
    expect(climbStairsWayCount(4)).toBe(5);
  });

  it("should return 8 for n = 5", () => {
    expect(climbStairsWayCount(5)).toBe(8);
  });
});

describe("climbStairsWays", () => {
  it("should return correct ways for n = 1", () => {
    expect(climbStairsWays(1)).toEqual([[1]]);
  });

  it("should return correct ways for n = 2", () => {
    expect(climbStairsWays(2)).toEqual([[1, 1], [2]]);
  });

  it("should return correct ways for n = 3", () => {
    expect(climbStairsWays(3)).toEqual([
      [1, 1, 1],
      [2, 1],
      [1, 2],
    ]);
  });

  it("should return correct number of ways for n = 4", () => {
    const result = climbStairsWays(4);

    expect(result.length).toBe(5);
  });

  it("each way should sum to n", () => {
    const n = 4;
    const result = climbStairsWays(n);

    for (const way of result) {
      const sum = way.reduce((a, b) => a + b, 0);
      expect(sum).toBe(n);
    }
  });
});
