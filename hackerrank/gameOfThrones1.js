/*

? Problem Statement :  Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO. 

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


function gameOfThrones(s) {
    let obj = myHashmap(s);
    let set = new Set(Object.values(obj));
    let arr = [...set]
    // console.log(arr)
    if (arr.length === 2) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                counter++;
            } else {
                counter++;
            }
        }
        if (counter === 2) {
            return 'YES'
        } else {
            return 'NO'
        }
    } else if (arr.length === 1 && arr[0] > 1) {
        return 'YES'
    } else if (arr.length > 2) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                counter++;
            }
        }
        if (counter > 1) {
            return 'NO'
        } else {
            return 'YES'
        }
    }
    else {
        return 'NO'
    }

}

console.log(gameOfThrones('cdefghmnopqrstuvw')) // NO
console.log(gameOfThrones('cdcdcdcdeeeef')) // YES
console.log(gameOfThrones('aaabbbb')) // YES

