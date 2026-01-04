merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); //[1,2,2,3,5,6]
// merge([1], 1, [], 0); // [1]
// merge([0], 0, [1], 1);  // [1]

// merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3); //[1,2,3,4,5,6]

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    console.log(nums1[i], nums2[j], "index-", i, j, k);

    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  console.log(nums1);
}
