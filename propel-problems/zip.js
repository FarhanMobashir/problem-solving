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
    for (let i = 0; i < checker.length; i++) {
        if (checker[i].includes('zip')) {
            idx.push(i);
        }
    }
    // checker.forEach(function (words) {
    //     if (words.includes('zip')) {

    //         idx.push(checker.indexOf(words));
    //     }
    // })
    if (idx.length === 1) {
        return -1
    } else {
        for (let i = 0; i < checker.length; i++) {
            if (i < idx[1]) {
                sum += checker[i].length;
            }
        }
    }
    console.log(idx)
    return sum + idx[1];

}

// console.log(zip('"Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms.'));

console.log(zip('all zip files are zipped'))