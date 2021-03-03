/*

? Problem Statement : Use the counting sort to order a list of strings associated with integers. If two strings are associated with the same integer, they must be printed in their original order, i.e. your sorting algorithm should be stable. There is one other twist: strings in the first half of the array are to be replaced with the character - (dash, ascii 45 decimal). Design your counting sort to be stable. 

* Input :     [ [ '0', 'ab' ],[ '6', 'cd' ], [ '0', 'ef' ], [ '6', 'gh' ],[ '4', 'ij' ], [ '0', 'ab' ],[ '6', 'cd' ],[ '0', 'ef' ],[ '6', 'gh' ], [ '0', 'ij' ], [ '4', 'that' ],[ '3', 'be' ],[ '0', 'to' ],[ '1', 'be' ],[ '5', 'question' ],[ '1', 'or' ],[ '2', 'not' ], [ '4', 'is' ],[ '2', 'to' ],[ '4', 'the' ] ]

* Output : - - - - - to be or not to be - that is the question - - - -

*/
function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > max) {
            max = arr[i][0];
        }
    }
    return max;
}

function countArr(arr) {
    let max = findMax(arr);
    let countArr = [];
    for (let i = 0; i <= max; i++) {
        countArr.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        countArr[parseInt(arr[i][0])] += 1;
    }
    return countArr;

}

function countMod(countArr) {
    for (let i = 1; i < countArr.length; i++) {
        countArr[i] = countArr[i] + countArr[i - 1];
    }
    return countArr;
}

function countSort(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        arr[i][1] = '-'
    }
    let count = countArr(arr);
    let modified = countMod(count);
    // console.log(modified);
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        out.push(0);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        out[modified[arr[i][0]] - 1] = arr[i][1]
        modified[arr[i][0]] -= 1;
    }
    // adding dashes

    return out;
}


console.log(countSort([['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['4', 'ij'], ['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['0', 'ij'], ['4', 'that'], ['3', 'be'], ['0', 'to'], ['1', 'be'], ['5', 'question'], ['1', 'or'], ['2', 'not'], ['4', 'is'], ['2', 'to'], ['4', 'the']]))

// - - - - - to be or not to be - that is the question - - - -