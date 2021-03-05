/*

? Problem Statement : Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

*/

function myHashmap(arr1) {
    let letterCount1 = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] in letterCount1)) {
            letterCount1[arr1[i]] = 1;
        } else {
            letterCount1[arr1[i]] += 1;
        }
    }
    return letterCount1;
}

function findMax(arr) {
    let max = -Infinity;
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max && arr[i] % 2 !== 0) {
            max = arr[i]
            idx = i;
        }
    }
    return idx;
}
function alternate(s) {
    let obj = myHashmap(s);
    // console.log(obj);
    let arr = Object.values(obj);
    console.log(arr);
    let result = 0;
    return result;
}

console.log(alternate('beabeefeab')) // 5
console.log(alternate('asdcbsdcagfsdbgdfanfghbsfdab')) // 8
console.log(alternate('asvkugfiugsalddlasguifgukvsa')) // 0

