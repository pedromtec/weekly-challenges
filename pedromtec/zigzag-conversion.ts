function convert(s: string, numRows: number): string {
    let zigZagIndex = 0
    let zigZagOrder = 1
    const rowLetters: Record<string, string[]> = {}
    for(const letter of s) {
        if(!rowLetters[zigZagIndex]) {
            rowLetters[zigZagIndex] = []
        }
        rowLetters[zigZagIndex].push(letter)
        if(zigZagIndex === numRows - 1)
            zigZagOrder = -1
        if(zigZagIndex === 0)
            zigZagOrder = 1
       zigZagIndex += zigZagOrder
    }
    return Object.values(rowLetters).flat().join('')
}