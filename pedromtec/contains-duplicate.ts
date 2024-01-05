function containsDuplicate(nums: number[]): boolean {
   const sortedNums = nums.sort((a, b) => a - b)
   for(let index = 1; index < nums.length; index++) {
    if(sortedNums[index] === sortedNums[index-1]) {
        return true
    }
   }
   return false
};