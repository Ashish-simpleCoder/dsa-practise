import { describe, it, expect } from "vitest";

/*
Problem

Minimum energy spent by a frog to reach the last stone.

A frog can jump 1 or 2 stones.

Each stone has a height.
Energy cost = abs(height[i] - height[j]).

Find minimum energy to reach the last stone.

Example
Input: [10,30,40,20]

Output: 30


Example
Heights: [10, 30, 20]

Jump 1 → 2
  |30 - 10| = 20
Energy = 20

Jump 2 → 3
  |20 - 30| = 10
Energy = 10

Total energy
  20 + 10 = 30

*/

function frogJump(heights: number[]) {
  const n = heights.length;

  if (n === 1) return 0;

  let prev2 = 0;
  let prev1 = Math.abs(heights[1] - heights[0]);

  for (let i = 2; i < n; i++) {
    const jump1 = prev1 + Math.abs(heights[i] - heights[i - 1]);
    const jump2 = prev2 + Math.abs(heights[i] - heights[i - 2]);

    const curr = Math.min(jump1, jump2);

    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

describe("frogJump - Minimum Energy", () => {
  it("should return 0 when only one stone", () => {
    expect(frogJump([10])).toBe(0);
  });

  it("should calculate energy for two stones", () => {
    expect(frogJump([10, 20])).toBe(10);
  });

  it("should return correct energy for basic example", () => {
    const heights = [10, 30, 40, 20];
    expect(frogJump(heights)).toBe(30);
  });

  it("should work for increasing heights", () => {
    const heights = [10, 20, 30, 40];
    expect(frogJump(heights)).toBe(30);
  });

  it("should work for decreasing heights", () => {
    const heights = [40, 30, 20, 10];
    expect(frogJump(heights)).toBe(30);
  });

  it("should handle equal heights", () => {
    const heights = [10, 10, 10, 10];
    expect(frogJump(heights)).toBe(0);
  });

  it("should work for larger example", () => {
    const heights = [30, 10, 60, 10, 60, 50];
    expect(frogJump(heights)).toBe(40);
  });
});
