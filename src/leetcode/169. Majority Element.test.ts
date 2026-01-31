import { describe, it, expect } from "vitest";

describe("majorityElement (Moore Voting Algorithm)", () => {
  it("returns the majority element for a simple case", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it("works when majority element appears consecutively", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it("works when majority element is at the beginning", () => {
    expect(majorityElement([5, 5, 5, 2, 3])).toBe(5);
  });

  it("works when majority element is at the end", () => {
    expect(majorityElement([1, 2, 3, 4, 4, 4, 4])).toBe(4);
  });

  it("works with a single-element array", () => {
    expect(majorityElement([10])).toBe(10);
  });

  it("works with negative numbers", () => {
    expect(majorityElement([-1, -1, -1, 2, 3])).toBe(-1);
  });

  it("works when majority element alternates frequently", () => {
    expect(majorityElement([1, 2, 1, 2, 1, 2, 1])).toBe(1);
  });

  it("works with large repeated values", () => {
    const nums = Array(1000).fill(7).concat([1, 2, 3]);
    expect(majorityElement(nums)).toBe(7);
  });
});

// Moore Voting Algorithm
// TC - O(n)
// Space - O(1)
function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == candidate) {
      count++;
    } else {
      count--;
      if (count == 0) {
        candidate = nums[i];
        count++;
      }
    }
  }
  return candidate;
}
