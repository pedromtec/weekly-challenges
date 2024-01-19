/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const trecho = (numRows * 2) - 2
    const vetor = Array.from({ length: numRows }, () => []);
    let firstIndexTrecho = 0
    let middleCharDown = numRows-1

    if(numRows === 1) return s
    
    while(firstIndexTrecho < s.length) {

        if(s[firstIndexTrecho]) vetor[0].push(s[firstIndexTrecho])
        if(s[middleCharDown]) vetor[vetor.length-1].push(s[middleCharDown])
        
        for(let i = 1; i < vetor.length - 1; i++ ) {
            const antesDoMeio = s[firstIndexTrecho+i]
            const depoisDoMeio = s[firstIndexTrecho+trecho-i]
            if(antesDoMeio) vetor[i].push(antesDoMeio)
            if(depoisDoMeio) vetor[i].push(depoisDoMeio)
        }

        firstIndexTrecho = firstIndexTrecho + trecho
        middleCharDown = middleCharDown + trecho
    }

    return vetor.flat(Infinity).join('')
};
