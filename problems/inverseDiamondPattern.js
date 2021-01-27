/*
? Problem Statement : Given an integer n, the task is to print the Inverse Diamond Pattern in 2n-1 rows.

* Input : n = 3
* Output : *** ***
*          **   **
*          *     *
*          **   **
*          *** *** 
*/

function inverseDiamond(n) {
    let result = '';
    let count1 = n;
    let space1 = 1;
    let space2 = 2 * n - 1;
    let count2 = 1;
    for (let i = 0; i < (2 * n - 1); i++) {
        if (count1 > 1) {
            console.log(('*').repeat((count1)) + (' ').repeat((space1)) + ('*').repeat((count1)))
            count1--;
            space1 += 2;
        } else {
            console.log(('*').repeat((count2)) + (' ').repeat((space2)) + ('*').repeat((count2)))
            count2 += 1;
            space2 -= 2;
            // console.log(space2)
        }

        // console.log(count)
    }

}

// console.log(inverseDiamond(7));
// console.log(inverseDiamond(10));
console.log(inverseDiamond(50));

