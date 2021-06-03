/**
 * todo
 * ? You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * ? Return the wealth that the richest customer has.
 * ? A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * 
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const arr = [];
  for (let i = 0; i < accounts.length; i++) {
    let toplam = 0;
    accounts[i].map((v) => (toplam += v));
    arr.push(toplam);
  }
  return arr.sort((a, b) => b - a)[0];
};

console.log(maximumWealth([[2, 8, 7],[7, 1, 3],[1, 9, 5],]));


/*  
* Example 1:
    Input: accounts = [[1,2,3],[3,2,1]]
    Output: 6
* Example 2:
    Input: accounts = [[1,5],[7,3],[3,5]]
    Output: 10
* Example 3:
    Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
    Output: 17
*/