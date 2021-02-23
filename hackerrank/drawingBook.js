/*

? Problem Statement : Complete the pageCount function in the editor below.

pageCount has the following parameter(s):

    int n: the number of pages in the book
    int p: the page number to turn to


*/

console.log(counter(5, 3, 0))
console.log(counter(5, 3, 5))


function pageCount(pageNum, target) {
    if (pageNum === target) {
        return 1;
    } else if (target === 1) {
        return 1;
    } else if (target > 1 && pageNum - target === 1) {
        return 0;
    }
    // else if () {

    // }
    // let result = 0;


}

// console.log(pageCount(6, 2)) // 1
// console.log(pageCount(5, 3)) // 1
// console.log(pageCount(5, 4)) // 0
