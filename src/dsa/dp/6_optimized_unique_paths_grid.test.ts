import { describe, it, expect } from "vitest";

/*

Reaching to the very last cell in grid

Time complexity = O(m X n)
Space complexity = O(min(m,n))

*/
function gridUniquePaths(rows: number, cols: number) {
  if (rows <= 0 || cols <= 0) throw Error("invalid size");

  let arr: number[] = new Array(cols).fill(1);

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      arr[col] = arr[col] + arr[col - 1];
    }
  }
  return arr[cols - 1];
}

describe("gridUniquePaths", () => {
  it("should return 1 for 1x1 grid", () => {
    expect(gridUniquePaths(1, 1)).toBe(1);
  });

  it("should return 1 for single row", () => {
    expect(gridUniquePaths(1, 5)).toBe(1);
  });

  it("should return 1 for single column", () => {
    expect(gridUniquePaths(5, 1)).toBe(1);
  });

  it("should return 2 for 2x2 grid", () => {
    expect(gridUniquePaths(2, 2)).toBe(2);
  });

  it("should return 3 for 2x3 grid", () => {
    expect(gridUniquePaths(2, 3)).toBe(3);
  });

  it("should return 6 for 3x3 grid", () => {
    expect(gridUniquePaths(3, 3)).toBe(6);
  });

  it("should return 10 for 3x4 grid", () => {
    expect(gridUniquePaths(3, 4)).toBe(10);
  });

  it("should return 28 for 3x7 grid", () => {
    expect(gridUniquePaths(3, 7)).toBe(28);
  });

  it("should handle larger grids", () => {
    expect(gridUniquePaths(10, 10)).toBe(48620);
  });

  it("should handle invalid input (0 rows or cols)", () => {
    expect(() => gridUniquePaths(0, 5)).toThrow();
    expect(() => gridUniquePaths(5, 0)).toThrow();
  });
});
