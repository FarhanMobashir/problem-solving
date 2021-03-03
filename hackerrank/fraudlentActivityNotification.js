function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
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
        countArr[arr[i]] += 1;
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
    let count = countArr(arr);
    // console.log('frequency array', count);
    let modified = countMod(count);
    // console.log('modified array', modified);
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        out.push(0);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        out[modified[arr[i]] - 1] = arr[i]
        modified[arr[i]] -= 1;
    }

    return out;
}


function activityNotifications(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr.slice(i, i + n)
        let median = findMedian(subArr);
        let fraudulent = checkFraud(median, arr[i + n])
        if (fraudulent) {
            count++
        }

    }
    return count;
}

function getSubArr(arr, n) {
    let newArr = [];
    let breakpoint = n - 1
    let end = n;
    for (let i = 0; i < arr.length - breakpoint; i++) {
        newArr.push(arr.slice(i, n));
        n++;
    }
    return newArr;
}

function checkFraud(median, value) {
    if (value >= 2 * median) {
        return true;
    } else {
        return false;
    }
}


function findMedian(arr) {
    let median = 0;
    let arrCopy = arr;
    arrCopy = countSort(arrCopy);
    // console.log(arrCopy)
    let idx;
    if (arrCopy.length % 2 !== 0) {
        idx = (arrCopy.length + 1) / 2;
        median = arrCopy[idx - 1]
    } else {
        idx = (arrCopy.length) / 2;
        let midAvg = (arrCopy[idx] + arrCopy[idx - 1]) / 2
        median = midAvg
    }
    return median

}


console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
// console.log(countSort([2, 3, 4, 2, 3, 6, 8, 4, 5]));