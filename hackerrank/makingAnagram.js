/*

? Problem Statement : Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number? 

* Input : 'abc', 'cde' -> 4
* Input : 'abc', 'amnop' -> 6

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

function makingAnagrams(s1, s2) {
    let str1 = myHashmap(s1);
    let str2 = myHashmap(s2);
    let counter = 0;
    // console.log(str1, str2);
    let iterator1 = Object.keys(str1);
    let iterator2 = Object.keys(str2);
    for (let i = 0; i < iterator1.length; i++) {
        if (!(iterator1[i] in str2)) {
            counter += str1[iterator1[i]];
        }
        else {
            if (str1[iterator1[i]] > str2[iterator1[i]]) {
                counter += (str1[iterator1[i]] - str2[iterator1[i]]);
            }
        }
    }
    for (let i = 0; i < iterator2.length; i++) {
        if (!(iterator2[i] in str1)) {
            counter += str2[iterator2[i]];
        } else {
            if (str2[iterator2[i]] > str1[iterator2[i]]) {
                counter += (str2[iterator2[i]] - str1[iterator2[i]])
            }
        }
    }

    return counter;

}

// console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa')) // 19
console.log(makingAnagrams('bugexikjevtubidpulaelsbcqlupwetzyzdvjphn', 'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk')) // 6


console.log(makingAnagrams('fcrxzwscanmligyxyvym'
    , 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
