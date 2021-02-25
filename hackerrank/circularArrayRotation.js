/* 

? Problem Statement : John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.
? For each array, perform a number of right circular rotations and return the values of the elements at the given indices.


*/

function circularArrayRotation(a, k, queries) {
    let result = [];
    for (let i = 0; i < k; i++) {
        a.unshift(a[a.length - 1]);
        a.pop();
    }
    for (let i = 0; i < queries.length; i++) {
        result.push(a[queries[i]]);
    }
    return result
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]))