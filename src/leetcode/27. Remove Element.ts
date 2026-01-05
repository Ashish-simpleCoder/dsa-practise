// removeElement([3, 2, 2, 3], 3);  // [2,2]
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); //  [0,1,4,0,3]
removeElement([3, 3], 3); // 0

// This solution will not remove elements
function removeElement(nums: number[], val: number): number {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

// This is remove elements
// function removeElement(nums: number[], val: number): number {
//   let total = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     if (val == nums[i]) {
//       total -= 1;
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return total;
// }
