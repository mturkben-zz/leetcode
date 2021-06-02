/**
 * @param {string} address
 * @return {string}
 */
 const defangIPaddr = address => address.split("").map(v => v === "." ? `[.]` : v).join("");

console.log(defangIPaddr("1.1.1.1")); // Output: "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
