/*

? Problem Statement : Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string,s , determine how many letters of the SOS message have been changed by radiation.

* Input : SOSSPSSQSSOR -> 3
* Input : SOSSOT -> 1


*/
function sos(str1, str2) {
    let counter = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            counter++;
        }
    }
    return counter;
}
function marsExploration(s) {
    // s = s.split('');
    let counter = 0;
    let start = 0;
    for (let i = 3; i < s.length + 1; i += 3) {
        let check = s.slice(start, i);
        counter += sos(check, 'SOS')
        start = i;
    }
    return counter;
}

console.log(marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'))