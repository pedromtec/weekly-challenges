function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const interval = new Set()
    
    for(let i = 0; i <= k; i++) {
        const num = nums[i]
        if(interval.has(num)) {
            return true
        }
        interval.add(num)
    }

    for(let i = k+1; i < nums.length; i++) {
        interval.delete(nums[i-1-k])
        const num = nums[i]
        if(interval.has(num)) {
            return true
        }
        interval.add(num)
    }

    return false
};