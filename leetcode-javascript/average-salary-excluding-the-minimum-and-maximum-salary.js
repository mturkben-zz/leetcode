/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
  const _ = salary.sort((a, b) => a - b); _.shift(0);_.pop()

  let arr = 0;
  for (let i = 0; i < _.length; i++) {
    arr += _[i];
    if (i + 1 === _.length) arr = arr / (i + 1);
  }
  return arr;
};

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
