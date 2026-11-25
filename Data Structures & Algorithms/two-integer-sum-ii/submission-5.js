class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    
twoSum(numbers, target) {
    let seen = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let diff = target - num;

        if (seen.has(diff)) {
            return [seen.get(diff) + 1, i + 1];
        }

        seen.set(num, i);
    }

    return [];
}
}
