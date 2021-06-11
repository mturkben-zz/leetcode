/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

const findTheDistanceValue = (arr1, arr2, d) => arr1.filter(v => arr2.every(m => Math.abs(v - m) > d)).length;


console.log(findTheDistanceValue(arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3))