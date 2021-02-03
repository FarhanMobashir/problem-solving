/*

? Problem Statement : You are given two inputs:
? An array of abbreviations.
? An array of words.
? Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

* Input : ["ho", "h", "ha"], ["house", "hope", "happy"] -> false
* Input : ["s", "t", "v"], ["stamina", "television", "vindaloo"] -> true
* Input : ["bi", "ba", "bat"], ["big", "bard", "battery"] -> false

todo Coming Up With Logic
? --> Breaking the problem
- iterate through arr1 and pick each element
- check whether the elemet of arr1 equals the slice of element of arr2
- if yes count 1
- if count is less than or greater than the actual length of arr2 return false
- if count equals the array length return true
*/

function abbreviationUnique(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j].slice(0, arr1[i].length)) {
                count++;
            }
        }
    }
    if (count === arr1.length) {
        return true;
    } else {
        return false;
    }
}

console.log(abbreviationUnique(["s", "t", "v"], ["stamina", "television", "vindaloo"]))
console.log(abbreviationUnique(["bi", "ba", "bat"], ["big", "bard", "battery"]))

