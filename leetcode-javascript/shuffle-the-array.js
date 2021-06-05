/**
 * todo
 * ? Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * ? Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 *
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  const x = nums.splice(0, n);
  return Array.from(x, (v, k) => [x[k], nums[k]]).flat();
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

/* 
 * Example 1:
    Input: nums = [2,5,1,3,4,7], n = 3
    Output: [2,3,5,4,1,7] 
 * Example 2:
    Input: nums = [1,2,3,4,4,3,2,1], n = 4
    Output: [1,4,2,3,3,2,4,1]
 * Example 3:
    Input: nums = [1,1,2,2], n = 2
    Output: [1,2,1,2]
*/
