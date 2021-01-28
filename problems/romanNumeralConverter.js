/*

? Convert the given number into a roman numeral.

* Input : 3 -> 'III'
* Input : 4 -> 'IV'

todo Coming Up With Logic

? --> Breaking the problem
- First convert the input into expanded form
- then take each element from the expanded form and convert it to roman number
- finally return all the converted roman number

*/

function romanNumeralConverter(num) {
    let roman = '';
    let exp = expandedForm(num);
    for (let i = 0; i < exp.length; i++) {
        roman += appender(exp[i]);
    }
    return roman;
}

function expandedForm(exp) {
    exp = exp.toString();
    let result = [];
    for (let i = 0; i < exp.length; i++) {
        result.push(parseInt(exp[i] + '0'.repeat(exp.length - i - 1)))
    }
    return result;
}

function appender(n) {
    if (n === 0) {
        return '';
    }
    // 1 to 4
    else if (n > 0 && n < 4) {
        return ('I').repeat(n.toString()[0]);
    }
    // 4
    else if (n === 4) {
        return 'IV'
    }
    // 6 to 8 
    else if (n >= 5 && n < 9) {
        return 'V' + 'I'.repeat(n - 5);
    }
    // 9
    else if (n === 9) {
        return 'IX'
    }
    // 10 to 30
    if (n > 9 && n < 40) {
        return ('X').repeat(n.toString()[0]);
    }
    // 40
    else if (n === 40) {
        return 'XL'
    }
    // 50 to 80
    else if (n >= 50 && n < 90) {
        return 'L' + 'X'.repeat(n.toString()[0] - 5);
    }
    // 90
    else if (n === 90) {
        return 'XC'
    }
    // 100 to 300
    if (n > 90 && n < 400) {
        return ('C').repeat(n.toString()[0]);
    }
    // 400
    else if (n === 400) {
        return 'CD'
    }
    // 500 to 800
    else if (n >= 500 && n < 900) {
        return 'D' + 'C'.repeat(n.toString()[0] - 5);
    }
    // 900
    else if (n === 900) {
        return 'CM'
    }
    // 1000 to 3000
    else if (n >= 1000 && n < 4000) {
        return 'M'.repeat(n.toString()[0]);
    }



    // else {
    //     return 'Please input the number from 0 to 4000';
    // }


}

console.log(appender(4))
// console.log(appender(20))
console.log(romanNumeralConverter(2340))
console.log(expandedForm(2340))