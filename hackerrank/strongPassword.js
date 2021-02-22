// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let regexNum = /[0-9]/g;
    let regexLower = /[a-z]/g;
    let regexUpper = /[A-Z]/g;
    let regexSpecial = /[!@#$%^&*()\-+]/g;
    let checker = [];
    let result = 0;
    checker.push(regexNum.test(password));
    checker.push(regexLower.test(password));
    checker.push(regexUpper.test(password));
    checker.push(regexSpecial.test(password));
    for (let i = 0; i < checker.length; i++) {
        if (checker[i] === false) {
            result += 1;
        }
    }
    // console.log(checker, result)
    if (password.length < 6 && result === 0) {
        return 6 - n;
    } else if (password.length < 6 && result !== 0) {
        if (result + n >= 6) {
            // console.log('hello')
            return result;
        } else {
            // console.log('hello wello')
            return 6 - n;
        }

    } else {
        console.log('hello')
        return result;
    }
}

// console.log(minimumNumber(11, '#HackerRank')) // 1
console.log(minimumNumber(4, 'IGEC')) // 3
console.log(minimumNumber(7, 'AUzs-nV')) // 3
// console.log(minimumNumber(6, 'aB1#we')) // 0


