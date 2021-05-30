/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (!s.match(/^\s*[+-]?\d+/)) return 0;
    const num = parseInt(s);
    const max = Math.pow(2, 31) - 1, min = Math.pow(-2, 31);
    return num > max ? max : num < min ? min : num;
};

console.log(myAtoi("42")); //  Output: 42
//console.log(myAtoi("   -42")); Output: -42
//console.log(myAtoi("4193 with words")); Output: 4193
//console.log(myAtoi("words and 987")); Output: 0
//console.log(myAtoi("-91283472332")); Output: -2147483648
