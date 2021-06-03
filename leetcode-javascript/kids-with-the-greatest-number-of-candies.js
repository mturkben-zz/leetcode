/**
 * 
 * todo
 * ? Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
 * ? For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest
 * ? number of candies among them. Notice that multiple kids can have the greatest number of candies.
 * 
 * 
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => candies.map(c => c + extraCandies >= Math.max(...candies) ? true : false);

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));


/*  
* Example 1:
    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true] 
* Example 2:
    Input: candies = [4,2,1,1,2], extraCandies = 1
    Output: [true,false,false,false,false] 
* Example 3:
    Input: candies = [12,1,12], extraCandies = 10
    Output: [true,false,true]
*/