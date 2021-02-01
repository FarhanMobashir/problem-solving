/*

? Problem Statement : Write a program to convert roman number to integers
? Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

* Input : 'III' -> 3
* Input : "MCMXCIV" -> 1994

todo Coming up with Logic
? --> Breaking the problem
- make an object with all roman numeral with their integer value
- split the string to an array
- make a result variable and set it to 0
- loop through the array and check if the current element is greater than the next element then pick its value from the object and add ot to the result
- else if the current element is less than the next element then find their difference and add it to the result 
- also increase the iteration count by 1


*/

function romanToInteger(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    s = s.split('');
    let result = 0;
    console.log(s);
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] >= roman[s[i + 1]]) {
            result += roman[s[i]];
            console.log(result);
        }

        else if (roman[s[i]] < roman[s[i + 1]]) {
            result += (roman[s[i + 1]] - roman[s[i]])
            console.log(result);
            i += 1;
        }
        else if (i = s.length - 1) {

            result += roman[s[i]];
            console.log('last ' + result);
        }
        else if (s.length === 1) {
            result += roman[s[i]];
        }
    }
    return result;
}

console.log(romanToInteger("D"))