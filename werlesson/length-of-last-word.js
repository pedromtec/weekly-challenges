/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    const casesFiltered =  s.split(' ').filter((i) => !!i)
    return casesFiltered[casesFiltered.length - 1].length
};