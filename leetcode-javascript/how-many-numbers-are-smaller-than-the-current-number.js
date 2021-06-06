/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = nums => nums.map(n => nums.filter(m => n > m)).map(a => a.length)

console.log(smallerNumbersThanCurrent([6,5,4,8]))