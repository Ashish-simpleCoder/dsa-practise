import { describe, it, expect } from "vitest";

// Minimum Cost Climbing Stairs
// Minimum Cost Climbing Stairs dynamic programming problem
function climbMin(costArr) {
  const n = costArr.length;

  const minCost = [];

  minCost[0] = costArr[0];
  minCost[1] = costArr[1];

  for (let i = 2; i < n; i++) {
    minCost[i] = Math.min(minCost[i - 1], minCost[i - 2]) + costArr[i];
  }

  return Math.min(minCost[n - 1], minCost[n - 2]);
}

describe("climbMin - Minimum Cost Climbing Stairs", () => {
  it("should return correct minimum cost for basic case", () => {
    const cost = [10, 15, 20];
    expect(climbMin(cost)).toBe(15);
  });

  it("should work for longer array", () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    expect(climbMin(cost)).toBe(6);
  });

  it("should handle two steps", () => {
    const cost = [5, 10];
    expect(climbMin(cost)).toBe(5);
  });

  it("should handle equal costs", () => {
    const cost = [10, 10, 10, 10];
    expect(climbMin(cost)).toBe(20);
  });

  it("should handle increasing costs", () => {
    const cost = [1, 2, 3, 4, 5];
    expect(climbMin(cost)).toBe(6);
  });

  it("should handle decreasing costs", () => {
    const cost = [5, 4, 3, 2, 1];
    expect(climbMin(cost)).toBe(6);
  });

  it("should work with zeros", () => {
    const cost = [0, 0, 0, 0];
    expect(climbMin(cost)).toBe(0);
  });
});
