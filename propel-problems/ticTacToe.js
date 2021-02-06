/*

? Problem Statement : Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.

* Input : [
*  ["X", "O", "X"],
*  ["O", "X",  "O"],
*  ["O", "X",  "X"]
* ]) ➞ "X"

* Input : [
*  ["O", "O", "O"],
*  ["O", "X", "X"],
*  ["E", "X", "X"]
* ]) ➞ "O"

* Input : [
*  ["X", "X", "O"],
*  ["O", "O", "X"],
*  ["X", "X", "O"]
* ]) ➞ "Draw"

todo Coming Up With the Logic
? --> Breaking the problem
- check first in each row whether all elements are same or not if yes return that element
- check in each coloumn whether all elements are same or not if yes return that element
- check diagonally whether all elements are same or not if yes return that element
- if none of the condition is true return "DRAW"
*/

function rowCheck(arr) {
    let set = new Set(arr);
    arr = [...set];
    if (arr.length === 1) {
        return true
    } else {
        return false;
    }
}

function columnCheck(arr) {

}
console.log(columnCheck([
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "O"]
]))
function ticTacToe(board) {
    console.log(board)
    for (let i = 0; i < board[0].length; i++) {
        if (rowCheck(board[i])) {
            return board[i][0];
        }
    }
}

// console.log(ticTacToe([
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["O", "X", "X"]
// ]))
// console.log(ticTacToe([
//     ["O", "O", "O"],
//     ["O", "X", "X"],
//     ["E", "X", "X"]
// ]))
// console.log(ticTacToe([
//     ["X", "X", "O"],
//     ["O", "X", "X"],
//     ["X", "X", "O"]
// ]))

