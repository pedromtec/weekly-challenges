/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function decimalToBinary(decimal) {

  let binaryString = ""

  while (decimal > 0) {
    binaryString = (decimal % 2) + binaryString;
    decimal = Math.floor(decimal / 2);
  }

  return binaryString;
}

var hammingWeight = function(n) {
    const value = decimalToBinary(n)
    return value.split('').filter((item) => Number(item)).length
};
