/*

? Problem Statement : Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value. 

*/



function pairs(k, arr) {
    let counter = 0;
    let nums = {};
    for (let item of arr) {
        let comp1 = item - k;
        let comp2 = item + k;
        if (comp1 in nums) {
            counter++
        }
        if (comp2 in nums) {
            counter++;
        }
        nums[item] = true;
    }
    console.log(nums)
    return counter;
}



console.log(pairs(2, [1, 5, 3, 4, 2]))