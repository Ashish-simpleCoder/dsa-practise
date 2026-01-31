import { describe, it, expect } from "vitest";

describe("removeDuplicates (allow at most two duplicates)", () => {
  it("handles basic case with duplicates", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  it("handles multiple groups of duplicates", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it("works when no element appears more than twice", () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it("works when all elements are the same", () => {
    const nums = [2, 2, 2, 2, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });

  it("works with a single element", () => {
    const nums = [10];
    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([10]);
  });

  it("works with two elements", () => {
    const nums = [5, 5];
    const k = removeDuplicates(nums);

    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([5, 5]);
  });

  it("works with negative numbers", () => {
    const nums = [-1, -1, -1, 0, 0, 1];
    const k = removeDuplicates(nums);

    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([-1, -1, 0, 0, 1]);
  });

  it("does not care about values beyond k", () => {
    const nums = [1, 1, 1, 2, 2, 2];
    const k = removeDuplicates(nums);

    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2]);
  });
});

// removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]); // 7
removeDuplicates([1, 1, 1, 2, 2, 3]); // 5

// Allow atleast two times for an element
// function removeDuplicates(nums: number[]): number {
//     let i = 0;

//     for (const ele of nums) {
//         if (i == 0 || i == 1 || nums[i - 2] != ele) {
//             nums[i] = ele;
//             i++;
//         }
//     }
//     return i;
// }

function removeDuplicates(nums: number[]): number {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    console.log({ j: nums[j], i: nums[i], "i-1": nums[i - 1] }, { i, j }, nums);
    if (nums[j] == nums[i] && nums[j] != nums[i - 1]) {
      nums[i + 1] = nums[j];
      i++;
      continue;
    }

    if (nums[j] != nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  console.log("------------");
  console.log(nums, i);
  return i + 1;
}
