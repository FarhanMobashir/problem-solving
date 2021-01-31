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
    let vowelInWord = [];
    arr[0].split('').forEach(function (item) {
        if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u') {
            vowelInWord.push(item);

        }
    })
    let set = new Set(vowelInWord);
    vowelInWord = [...set];
    console.log(vowelInWord);
    for (let i = 0; i < arr.length; i++) {

        if (!(arr[i].includes(vowelInWord[0]))) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

console.log(vowelFamilies(["many", "carriage", "emit", "apricot", "animal"]));
