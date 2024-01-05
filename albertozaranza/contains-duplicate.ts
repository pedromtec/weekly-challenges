export function containsDuplicate(numbers: number[]): boolean {
  let arr = {}
  let hasDuplicated = false

  numbers.forEach((num) => {
    arr[num] ? arr[num] += 1 : arr[num] = 1
    
    if(arr[num] >= 2) {
      hasDuplicated = true
      return
    }
  })

  return hasDuplicated
};