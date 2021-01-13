/*
 ? Problem Statement
 * We are given a one dimensional array of numbers representing length of strings
 * We have to cut the stick into smaller sticks discarding the shortest pieces until there are none left.

 Example

 ? Input : [1,2,3]
 * Output : [3,2,1]

 todo 1. Understanding the problem
-- finding the smallest number in array
-- subtracting it from all other element and then dispatching it from the original array
-- finally return the count of array after before the removal of smallest element
? Example
=> We have the array // * [1,2,3]
- So we find the smallest array which in this case in '1'
- then we subtract it from the other elements which in this case is  2 and 3 and then pop out this element from the array and push it inside our output array
- we then finally get // * [1,2] as array and [3] as the out put array
- silmilarly now we have again '1' as the smallest element
- so we subtract it from the other elements and return the cout of elements to our output array and then popping out the smallest element
- here we got  // * [1] as array and [3,2] as the output array
- similarly we go on get the final result as // * [3,2,1] as the output array

todo 2. Coming Up with logic
--> First we have to find the smallest number
// ? So we can sort the array in descending order beforehand and will pick the last element of the array
? First we have to find the smallest element in the input array and then keep it somewhere and remove all the smallest elements from the array // ! this can be done by removing the duplicates but how ??
? then we can push the count-1 to the output array and pop out it from the array
? now we have to subtract the smallest number from the remaining elemnts
? repeat this process until our original array becomes empty

todo 3. Writing Up Pseuducode
 function cutTheStick(arr) {
    arr = arr.sort() // * sorting the elements
    let result = [] // * output array
    while (arr !== []) {
        for(let i = 0; i < arr.length; i++) {
        let smallest = arr[arr.length - 1]
        arr[i] = arr[i] - smallest;
            result.push(arr.length - 1);
    }
     arr.pop();
    }
    return result;
}

 */

// todo 3. Writing the actual code

function cutTheStick(arr) {
    // arr = sortedArr(arr);
    arr = arr.sort((a, b) => b - a);
    // console.log(arr);
    let result = [];
    while (arr.length !== 0) {
        // console.log('while ', arr);
        let smallest;
        for (let i = 0; i < arr.length; i++) {
            // console.log('for ', arr);
            smallest = arr[arr.length - 1];

            // console.log(smallest);
            arr[i] = arr[i] - smallest;
            console.log('arrays item :', arr[i]);

        }
        result.push(arr.length);
        console.log('input array before splice : ', arr);
        arr.splice(arr.indexOf(0), (arr.length - arr.indexOf(0)))
        console.log('input array after splice : ', arr);
        console.log('input array before pop : ', arr);
        console.log('result :', result)
        // arr.pop();
        console.log('input array after pop : ', arr);

    }
    return result;
}

// ! ----> function
function sortedArr(arr) {
    arr = arr.sort((a, b) => b - a);
    return arr;
}


// ? Helper Function
function areArraysEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
function testCutTheStick() {
    let inputandExpectedOutput = [
        [[1, 2, 3], [3, 2, 1]],
        [[5, 4, 4, 2, 2, 8], [6, 4, 2, 1]]
    ]
    for (let [input, expectedOutput] of inputandExpectedOutput) {
        let actualOutput = cutTheStick(input);
        console.log('input : ', input, 'actualOutput :', actualOutput, 'expectedOutput :', expectedOutput)
        // if (areArraysEqual(actualOutput, expectedOutput)) {
        //     console.log('Test is passed !!')
        // } else {
        //     console.log('Test is failed !!');
        // }
    }
}

// testCutTheStick();

console.log(cutTheStick([5, 4, 4, 2, 2, 8]))



