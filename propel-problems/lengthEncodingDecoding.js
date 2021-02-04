/*

? Problem Statement : Define a function called encode which accepts a string and returns the run-length encoding of that string.

* Input: "aaaabbbccd"
* Output: "4a3b2c1d"

? Define a function called decode which accepts a run length-encoded version of string and returns the original string

* Input: "4a3b2c1d"
* Output: "aaaabbbccd"

todo COming Up With Logic
? --> Breaking the problem
-> for ENCODING
    - make an object with letters an key and their count as value
    - print them out
-> for DECODING
    - start iterating through the string at two step
    - pick the element at each step and print it as the following times
*/

function lenghtEncoding(str) {
    let obj = {};
    let result = '';
    let unique = '';
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in obj)) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
        }
    }
    for (let item in obj) {
        unique += item;
    }
    for (let i = 0; i < unique.length; i++) {
        result += obj[unique[i]];
        result += unique[i]
    }
    console.log(result)
    return obj;
}


function lenghtDecoding(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        result += str[i + 1].repeat(str[i]);
    }
    return result;
}

console.log(lenghtEncoding("aaaabbbccd"));
console.log(lenghtDecoding("4a3b2c1d"));
