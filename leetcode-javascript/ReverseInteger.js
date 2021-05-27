const reverse = (x) => {
  const X = Math.abs(x).toString();
  const _x = Array.from(X).reverse();

  const findZero = _x.filter((_, i) => {
    if (x.length > 0) return _ === "0" ? null : _;
    else return _;
  });

  const val = x < 0 ? parseInt(findZero.join("")) * -1 : parseInt(findZero.join(""));
  return val < Math.pow(-2, 31) || val > Math.pow(2, 31) - 1 ? 0 : val;
};

console.log(reverse(123)); // Output: 321 
// console.log(reverse(-123)); Output: -312
// console.log(reverse(235234235)); Output: 532432532
// console.log(reverse(-123414123)); Output: -321414321
// console.log(reverse(0)); Output: 0