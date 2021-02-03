/*

? Write a function that returns true if a given name can generate an array of words.
* Input : "Justin Bieber", ["injures", "ebb", "it"] -> Output : true
* Input : "Jeff Goldblum", ["jog", "meld", "bluffs"] -> Output : false

todo Coming Up With The Logic

? --> Breaking the problem
- split the word
- pick every letter and check whether they are in the other words only once
- if all letter are there return true else false
*/

function generatingWordsFromNames(str, arr) {
    str = str.toLowerCase().split(' ').join('');
    arr = arr.join('').split('');
    console.log(arr);
    console.log(str);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (str.indexOf(arr[i]) !== -1) {
            count++;
        }

    }
    if (str.length !== arr.length) {
        return false
    } else if (count === str.length) {
        return true
    } else {
        return false
    }

}

console.log(generatingWordsFromNames("Jeff Goldblum", ["jog", "meld", "bluffs"]))