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

}

function expandedForm(n) {
    n = n.toString();
    let result = [];
    for (let i = 0; i < n.length; i++) {
        result.push(n[i])
    }
    return result;
}

console.log(expandedForm(2345))