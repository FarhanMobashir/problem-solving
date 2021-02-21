/*

? Problem Statement : Given an array of integers, where all elements but one occur twice, find the unique element. 

* Input : [1,2,3,4,1,5,6,7] -> 1

*/
function myHashmap(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;

        }
    }
    return obj;
}

console.log(myHashmap([0, 0, 1, 2, 1]))
function lonelyinteger(a) {
    let counter = 0;
    let first;
    if (a.length === 1) {
        return a[0];
    } else {
        let peeker = myHashmap(a);
        let set = new Set(a);
        let newArr = [...set];
        for (let i = 0; i < newArr.length; i++) {
            if (peeker[newArr[i]] === 1) {
                return newArr[i]
            }
        }

    }

}

console.log(lonelyinteger([1, 2, 3, 4, 1, 5, 6, 7]));
console.log(lonelyinteger([1, 1, 2]));
