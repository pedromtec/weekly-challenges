const lengthOfLastWord = (s: string): number => {
    const parts = s.trim().split(' ')
    return parts[parts.length-1].length
};