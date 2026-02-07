import { describe, it, expect } from "vitest";

// assume functions are imported from the module under test
// import { rightRotate1, rightRotate2, rightRotate3, rightRotate4 } from "./rotate";

describe("rightRotate implementations", () => {
  const implementations = [
    ["rightRotate1", rightRotate1],
    ["rightRotate2", rightRotate2],
    ["rightRotate3", rightRotate3],
    ["rightRotate4", rightRotate4],
  ] as const;

  implementations.forEach(([name, rotate]) => {
    describe(name, () => {
      it("rotates array to the right by k", () => {
        const nums = [1, 2, 3, 4, 5];
        const result = rotate([...nums], 2);
        expect(result).toEqual([4, 5, 1, 2, 3]);
      });

      it("handles k = 0 (no rotation)", () => {
        const nums = [1, 2, 3];
        const result = rotate([...nums], 0);
        expect(result).toEqual([1, 2, 3]);
      });

      it("handles k greater than array length", () => {
        const nums = [1, 2, 3];
        const result = rotate([...nums], 5);
        expect(result).toEqual([2, 3, 1]); // 5 % 3 = 2
      });

      it("handles k equal to array length", () => {
        const nums = [1, 2, 3];
        const result = rotate([...nums], 3);
        expect(result).toEqual([1, 2, 3]);
      });

      it("works with a single-element array", () => {
        const nums = [42];
        const result = rotate([...nums], 10);
        expect(result).toEqual([42]);
      });

      it("works with an empty array", () => {
        const nums: number[] = [];
        expect(rotate(nums, 1)).toEqual([]);
      });

      it("mutates the original array (in-place)", () => {
        const nums = [1, 2, 3, 4];
        const result = rotate(nums, 1);
        expect(result).toBe(nums);
        expect(nums).toEqual([4, 1, 2, 3]);
      });
    });
  });
});

//////////////////////////------------Implementation-------//////////////////////////////////////

function rightRotate1(nums: number[], k: number) {
  if (k == 0 || nums.length == 0) return nums;

  for (let i = 0; i < k; i++) {
    const lastItem = nums[nums.length - 1];
    nums.pop();
    nums.unshift(lastItem);
  }

  return nums;
}

function rightRotate2(nums: number[], k: number) {
  if (k == 0 || nums.length == 0) return nums;

  for (let i = 0; i < k; i++) {
    const lastItem = nums[nums.length - 1];
    nums.length = nums.length - 1;
    nums.unshift(lastItem);
  }

  return nums;
}

function rightRotate3(nums: number[], k: number) {
  if (k == 0 || nums.length == 0) return nums;

  k = k % nums.length;

  const deletedItems = nums.splice(nums.length - k, k);
  nums.unshift(...deletedItems);

  return nums;
}

function rightRotate4(nums: number[], k: number) {
  if (k == 0 || nums.length == 0) return nums;

  k %= nums.length;

  const reverse = (left: number, right: number) => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);

  return nums;
}
