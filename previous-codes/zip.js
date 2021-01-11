// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
// Examples

// findZip("all zip files are zipped") ➞ 18

// findZip("all zip files are compressed") ➞ -1

// Notes

// Uppercase "Zip" is not the same as lowercase "zip".

function zip(str) {
    let checker = str.slice().split(' ');
    let idx = [];
    let sum = 0;
    checker.forEach(function (words) {
        if (words.includes('zip')) {

            idx.push(checker.indexOf(words));
        }
    })
    if (idx.length === 1) {
        return -1
    } else {
        for (let i = 0; i < checker.length; i++) {
            if (i < idx[1]) {
                sum += checker[i].length;
            }
        }
    }
    return sum + idx[1];

}

console.log(zip('all zip files are compressed in a zipps'));