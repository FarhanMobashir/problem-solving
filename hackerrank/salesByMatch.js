/*

? Probleem Statement : There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

* Input : [1,2,1,2,1,3,2] -> 2
*/

function myHashmap(arr, n) {
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }
    return obj;
}

// console.log(myHashmap([1, 2, 1, 2, 1, 3, 2], 7))

function sockMerchant(n, ar) {
    let pairs = 0;
    let obj = myHashmap(ar, n)
    let set = new Set(ar);
    let nArr = [...set];
    // console.log(nArr)
    for (let i = 0; i < nArr.length; i++) {
        if (obj[nArr[i]] >= 2) {
            let remainder = obj[nArr[i]] % 2;
            pairs += (obj[nArr[i]] - remainder) / 2
        }
    }
    return pairs
}


console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))