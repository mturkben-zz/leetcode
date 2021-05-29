/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort(); 
  const val = arr[Math.floor((arr.length - 1) / 2)];
  if (val === 0) return 0;
  if (arr.length % 2 === 0) {
    return (val + val + 1) / 2;
  }
  return val;
};

console.log(findMedianSortedArrays(nums1 = [1,3], nums2 = [2])); // Output: 2
//console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4])); Output: 2.5
//console.log(findMedianSortedArrays(nums1 = [0,0], nums2 = [0,0])); Output: 0
//console.log(findMedianSortedArrays(nums1 = [], nums2 = [1])); Output: 1
//console.log(findMedianSortedArrays(nums1 = [2], nums2 = [])); Output: 2
