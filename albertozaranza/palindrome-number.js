/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = x.toString()
    let isPalindrome = true

    if (str.length === 1) return isPalindrome

    for (let i = 0; i < str.length - 1; i++) {
        if (i === str.length - 1 - i) break

        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false
            break
        }
    }

    return isPalindrome
};