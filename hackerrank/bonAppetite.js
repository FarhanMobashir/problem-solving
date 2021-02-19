/*

? Problem Statement : Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna. 

bonAppetit has the following parameter(s):

*    bill: an array of integers representing the cost of each item ordered
*    k: an integer representing the zero-based index of the item Anna doesn't eat
*    b: the amount of money that Anna contributed to the bill

* Input : [3, 10, 2, 9], 1, 12 -> 5


*/

function bonAppetit(bill, k, b) {
    // let declinedItem = bill.splice(k, k).join('')
    let actualBill = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i === k) {
            actualBill = actualBill;
        } else {
            actualBill += bill[i];
        }

    }
    if (actualBill / 2 === b) {
        console.log('Bon Appetit')
    } else {
        console.log(b - (actualBill / 2));
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))
console.log(bonAppetit([3, 10, 2, 9], 1, 7))
