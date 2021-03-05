/*

? Problem Statement : Complete the stringConstruction function in the editor below. It should return the minimum cost of copying a string. 

* She can perform them any number of times to construct a new string:
! - Append a character to the end of string p at a cost of 1 dollar.
! - Choose any substring of p and append it to the end of p at no charge.

*/
function checkPalindrome(s) {
    let result = [];
    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);

    }
    if (result.join('') === s) {
        return true;
    } else {
        return false;
    }
}
function stringConstruction(s) {
    let result = 0;
    if (s.length % 2 === 0) {
        let mid = Math.floor(s.length / 2);
        if (s.slice(0, mid) === s.slice(mid, s.length)) {
            // console.log(s.slice(0, mid), s.slice(-0, mid))
            result = mid;
        } else if (checkPalindrome(s)) {
            result = mid;
        }
        else {
            result = s.length;
        }
    } else {
        let mid = Math.floor(s.length / 2);
        if (s.slice(0, mid) === s.slice(mid, s.length) || s.slice(0, mid) === s.slice(-0, mid)) {
            result = mid + 1;
        } else if (checkPalindrome(s)) {
            result = mid;
        }
        else {
            result = s.length;
        }
    }
    return result;
}

console.log(stringConstruction('abcd')) // 4
console.log(stringConstruction('abab')) // 2
console.log(stringConstruction('bccb')) // 2

