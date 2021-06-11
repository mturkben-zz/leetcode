/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) => {
  const _ = s.split(" ");
  let arr = [];
  for(let i = 0; i < k; i++) {
      arr.push(_[i])
  }
  return arr.join(" ")
};

console.log(truncateSentence((s = "Hello how are you Contestant"), (k = 4)));
