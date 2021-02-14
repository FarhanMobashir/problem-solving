/*

? Problem Statement : from the given string determine the number of words

* Input : saveChangesInTheEditor -> 5
* Input : oneTwoThree -> 3


*/

function camelcase(s) {
    let wordCount = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() !== s[i]) {
            wordCount += 1;
        }
    }
    return wordCount;

}

console.log(camelcase('saveChangesInTheEditor'));
console.log(camelcase('oneTwoThree'));
