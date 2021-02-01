/*

? Problem Statement : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
? An input string is valid if:
? Open brackets must be closed by the same type of brackets.
? Open brackets must be closed in the correct order.

* Input : s = "()" -> true
* Input: s = "(]" -> false
* Input: s = "([)]" -> false

*/

function validParenthesis(str) {

}

console.log(validParenthesis('([)]')); // false
console.log(validParenthesis('()[]{}')); // true
console.log(validParenthesis('{[]}')); // false
