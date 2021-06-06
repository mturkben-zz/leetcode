/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
    const nums = [...n.toString()]
    let nc = 1, nt = 0;
    nums.map(a => nc *= parseInt(a))
    nums.map(a => nt += parseInt(a))
    return nc - nt
};



console.log(subtractProductAndSum(4421))