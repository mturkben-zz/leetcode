/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let toplam = 0;
    return nums.map(item => toplam += item)
};



console.log(runningSum(nums = [1,2,3,4])); // Output: [1,3,6,10]
console.log(runningSum(nums = [1,1,1,1,1])); // Output: [1,2,3,4,5]
console.log(runningSum(nums = [3,1,2,10,1])); // Output: [3,4,6,16,17]