/*

? Problem Statement : Write a program to print the following pattern, based on input N
? Constraints: N >= 3

* Input : 5
* Output :
        * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * * 
* * *       * * * 
* * *       * * * 
* * *       * * * 

todo Coming Up With the Logic
? --> Breaking the problem
- first print a 5 level pyramid
- add a 3 level gate below

*/

function gatePatttern(n) {
    let spaceForPyramid = n - 1;
    let star = 1;
    for (let i = 1; i <= n + 3; i++) {
        if (i <= n) {
            console.log(' '.repeat(spaceForPyramid) + '*'.repeat(star))
            spaceForPyramid -= 1;
            star += 2
        } else {
            // console.log(star)
            console.log('*'.repeat(3) + " ".repeat(star - 8) + '*'.repeat(3))
        }

    }
}

gatePatttern(40)