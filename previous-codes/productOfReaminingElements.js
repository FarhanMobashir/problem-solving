// Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.
// Examples

// canPartition([2, 8, 4, 1]) ➞ true
// // 8 = 2 x 4 x 1

// canPartition([-1, -10, 1, -2, 20]) ➞ false

// canPartition([-1, -20, 5, -1, -2, 2]) ➞ true

// Notes

//     The array may contain duplicates.
//     Multiple solutions can exist, any solution is sufficient to return true.

function partition(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let p = 1;
        let check = arr[i - 1];
        console.log(check);
        // console.log('upper :' + check)
        for (let j = 1; j < arr.length; j++) {
            // console.log(arr[j])
            count++;
            p *= arr[j];

            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]

        }
        // console.log(p)

        if (p === check) {
            console.log(p, check)
            return true
        }


    }
    return false;
    // console.log(count)
    // console.log(products);
}

console.log(partition([1, 1, -1, 1]))
// [-1, 1, 1]