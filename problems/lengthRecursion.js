// --> We are getting a string as input e.g. 'apple'

// --> My approach will be
// 1. Iteratively
// looping 



function StrLength(str) {
    let count = 0

    while (str !== "") {
        str = str.split("")
        count++
        str.pop()
        str = str.join("")
    }
    console.log(count)
}
// console.log('apple' - ' ')
// console.log(StrLength('apple'));
function StrLengthRecursion(str) {
    let count = 0
    if (str === "") {
        return 0
    }
    str = str.split("")
    str.pop()
    str = str.join("")
    return 1 + StrLengthRecursion(str)
}

console.log(StrLengthRecursion('apple'))