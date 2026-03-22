import { describe, it, expect } from "vitest";

/*
Problem

You are a robber. Each house has money.
You cannot rob two adjacent houses.

Find the maximum money you can rob.


Input: [2,7,9,3,1]
Output: 12
Explanation:
Rob 2 + 9 + 1
*/
function maxMoneyRobbery(moneyArr: number[]) {
  if (moneyArr.length === 0) return 0;
  if (moneyArr.length === 1) return moneyArr[0];

  const moneySum: number[] = [];
  moneySum[0] = moneyArr[0];
  moneySum[1] = Math.max(moneyArr[0], moneyArr[1]);

  for (let i = 2; i < moneyArr.length; i++) {
    // can not take adjacent houses, so can not sum with exact previous house. taking n-2th house
    moneySum[i] = Math.max(moneySum[i - 1], moneySum[i - 2] + moneyArr[i]);
  }

  return moneySum[moneyArr.length - 1];
}

describe("maxMoneyRobbery", () => {
  it("should return correct value for basic case", () => {
    const arr = [2, 7, 9, 3, 1];
    expect(maxMoneyRobbery(arr)).toBe(12);
  });

  it("should handle small array of two houses", () => {
    const arr = [5, 10];
    expect(maxMoneyRobbery(arr)).toBe(10);
  });

  it("should work when robbing alternate houses is optimal", () => {
    const arr = [2, 1, 1, 2];
    expect(maxMoneyRobbery(arr)).toBe(4);
  });

  it("should handle increasing values", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(maxMoneyRobbery(arr)).toBe(9);
  });

  it("should handle decreasing values", () => {
    const arr = [5, 4, 3, 2, 1];
    expect(maxMoneyRobbery(arr)).toBe(9);
  });

  it("should work when best option skips multiple houses", () => {
    const arr = [10, 1, 1, 10];
    expect(maxMoneyRobbery(arr)).toBe(20);
  });

  it("should work with zeros", () => {
    const arr = [0, 0, 0, 0];
    expect(maxMoneyRobbery(arr)).toBe(0);
  });
});
