/*
? Problem Statement : Write a function that returns a character mapping from a word.
? - Start your counter at 0, and increment by 1 each time you encounter a new character.
? - Identical characters should share the same number.

* Input : "fluffy" -> Output : [0, 1, 2, 0, 0, 3]
* Input : "babbcb" -> Output : [0, 1, 0, 0, 2, 0]

todo Coming Up With Logic

? --> Breaking the problem
- loop through the string
- if any character is found make counter = 0;
- push the counter value in our output array
- keep the character value as key and value as counter in our found object
- if again same element is found push the counter value associated with that very character
- if new character is found increment the counter by 1
- push the counter value in our iutput array
- keep the character value as key and value as counter in our found object;
*/

// todo Writing Actual Code

function uniqueCharacterMapping(str) {
    let found = {};
    let result = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in found)) {
            found[str[i]] = counter++;
            result.push(found[str[i]]);
        } else {
            result.push(found[str[i]]);

        }
    }
    console.log(result)
    return found;
}

console.log(uniqueCharacterMapping('fluffy'));
console.log(uniqueCharacterMapping('buttery'));





