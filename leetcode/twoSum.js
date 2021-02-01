/*
? Problem Statement : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
? You may assume that each input would have exactly one solution, and you may not use the same element twice.
? You can return the answer in any order.

* Input : nums = [2,7,11,15], target = 9 -> [0,1]
* Input : nums = [3,2,4], target = 6 -> [1,2]

todo Coming Uo With Logic
? --> Breaking the problem
- make all the possible pairs
- add the elements and check whether they are equals the target
- if they equals the target return push the index of those pairs

? --> Pseuducode
for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
        if(nums[i] + num[j] === target) {
            result.push(arr.indexOf(i), arr.indexOf(j))
        }
    }
}
*/

function twoSums(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                // console.log('im here')
                if (nums[i] === nums[j]) {
                    result.push(nums.indexOf(nums[i]), nums.lastIndexOf(nums[j]))
                } else {
                    result.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]))
                }

            }
        }
    }
    return result
}

console.log(twoSums([2, 7, 11, 15], 9));