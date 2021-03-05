/*

? Problem Statement : A Decent Number has the following properties:
! Its digits can only be 3's and/or 5's.
! The number of 3's it contains is divisible by 5.
! The number of 5's it contains is divisible by 3.
! It is the largest such number for its length.

* Input : 1 -> -1
* Input : 3 -> 555
* Input : 5 -> 33333
* Input : 11 -> 55555533333

*/

function decentNumber(n) {
    let result = '';
    if (n < 3) {
        result = -1;
        console.log(result)
    } else if (n === 5) {
        result = '3'.repeat(5);
        console.log(result)
    } else if (n === 3) {
        result = '5'.repeat(3);
        console.log(result);
    } else if (n % 8 === 3) {
        let fiveCount = n - 5;
        result = '5'.repeat(fiveCount) + '3'.repeat(5);
        console.log(result)
    }
    else if (n % 8 === 5) {
        let fiveCount = n - 3;
        result = '5'.repeat(fiveCount) + '3'.repeat(3);
        console.log(result)
    } else if (n % 5 === 0 && n % 3 !== 0) {
        result = '5'.repeat(n - 10);
        console.log(result)
    }
}

decentNumber(1)   // -1
decentNumber(3)   // 555
decentNumber(5)   // 33333
decentNumber(11)  // (555555)33333
decentNumber(100)  // 5555..90times....3333333333

