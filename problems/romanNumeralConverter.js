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
    return num;
}

function expandedForm(exp) {

}

function appender(n) {
    if (n > 0 && n < 5) {
        return ('I').repeat(n.toString()[0]);
    }
    else if (n > 9 && n <= 30) {
        return 'X'.repeat(n.toString()[0]);
    }

}

console.log(appender(20))
console.log(expandedForm(12))