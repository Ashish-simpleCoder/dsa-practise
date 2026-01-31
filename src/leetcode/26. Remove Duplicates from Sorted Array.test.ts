import { describe, it, expect } from "vitest";

describe("removeDuplicates", () => {
  it("removes duplicates from a typical sorted array", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it("handles multiple duplicates", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);

    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it("works when there are no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);

    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  it("works with a single-element array", () => {
    const nums = [10];
    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([10]);
  });

  it("works when all elements are the same", () => {
    const nums = [2, 2, 2, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([2]);
  });

  it("works with negative numbers", () => {
    const nums = [-3, -3, -2, -2, -1];
    const k = removeDuplicates(nums);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([-3, -2, -1]);
  });
});

// All of the algorithms are in-place
function removeDuplicates(nums: number[]): number {
  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

// Using splice
// function removeDuplicates(nums: number[]): number {
//   let prev: number | undefined = undefined;

//   for (let i = 0; i < nums.length; i++) {
//     if (prev == nums[i]) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       prev = nums[i];
//     }
//   }

//   return nums.length;
// }
