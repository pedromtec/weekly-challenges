export function containsNearbyDuplicate(numbers: number[], k: number): boolean {
  const set = new Set()
  let containsDuplicate = false

  numbers.forEach((num, index) => {
      if (index > k)
          set.delete(numbers[index - k - 1])

      if (set.has(numbers[index])) {
          containsDuplicate = true
      }

      set.add(num)
  })

  return containsDuplicate
};