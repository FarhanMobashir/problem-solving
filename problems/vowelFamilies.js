/*

? Problem Statement : Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

* Input : ["toe", "ocelot", "maniac"] -> Output : ["toe", "ocelot"]
* Input : ["many", "carriage", "emit", "apricot", "animal"] -> Output : ["many"]
* Input : ["hoops", "chuff", "bot", "bottom"] -> Output : ["hoops", "bot", "bottom"]

todo 1. Coming Up with Logic

? --> Breaking the problem
- finding the all vowel in the first word
- now checking whether the next word contain the same vowel only
- if yes push it in our output array
*/

function vowelFamilies(arr) {
    let vowel = [];
    let result = [];
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[0][j] === 'a' || arr[0][j] === 'e' || arr[0][j] === 'i' || arr[0][j] === 'o' || arr[0][j] === 'u') {
            vowel.push(arr[0][j]);
        }
    }
    vowel.forEach(function (letter) {
        arr.forEach(function (item) {
            if ((item.includes(letter))) {
                result.push(item)
            }
        })
    })
    console.log(vowel);
    console.log(result);
}

console.log(vowelFamilies(["many", "carriage", "emit", "apricot", "animal"]));
