/* 

? Problem Statement : A Latin Square is a n x n grid filled by n distinct numbers each appearing exactly once in each row and column. Given an input n, we have to print a n x n matrix consisting of numbers from 1 to n each appearing exactly once in each row and each column.

* Input : 5
* Output : 1 2 3 4 5
         * 5 1 2 3 4
         * 4 5 1 2 3 
         * 3 4 5 1 2
         * 2 3 4 5 1

todo Coming Up With Logic

? --> Breaking the problem
- loop through 1 to n , n times and print all the numbers in a latin square way

*/

function findArr(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

function latinSquare(n) {
    let result = findArr(n);
    for (let i = 0; i < result.length; i++) {
        console.log(result)
        result.unshift(result[result.length - 1])
        result.pop();

    }

}

console.log(latinSquare(6));