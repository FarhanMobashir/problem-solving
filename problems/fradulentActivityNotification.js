/*
? Problem Statement :
? HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

* Input : trailing days = 5 , expenditure = [2,3,4,2,3,6,8,4,5]
* Output : 2

todo 1. Understanding the problem

--> We are given an array containing the expenditure of an individual on a daily basis slong with the number of trailing days for which the fraudulent notification is checked.
--> We have to count the number of notification he/she will get as per the his expenditure and trailing days.
--> How the notification is calculated ?
? It is calculated by checking whether today's expenditure is greater than or equal to the twice the median of last expenditure calculated upon the number of trailing days. If it passes the test he/she will get notification otherwise not.


todo 2. Coming Up with the Logic

=> What are the tasks we have to do ?
* 1. finding the median for the expenditure having length equal to number of trailing days
* 2. finding the sub-array after each iteration containing the array of length equal to number of trailing days.
* 3 Keeping the previous median with us
* 4 Checking whether today's expenditure is greater than or equal to twice the previous median


todo 3. Writing Up the Pseuducode

=> Breaking Up the tasks
? 1.Write a function for median which should take an array and return the median
function(arr) {
    let median = 0;
    arr = arr.sort(c);
    let idx;
    if(arr.length % 2 !=== 0) {
        idx = (arr.length +1)/2
        median = arr[idx -1]
    } else {
        idx = (arr.length)/2
        let midAvg = (arr[idx] + arr[idx - 1]) /2
    }
    return median

}

? 2.Write a function which gives the sub-array with length equals the number of trailing days
function subArr(arr, n = trailing days) {
    let newArr = [];
    let end = n;
    for(let i = 0; i < arr.length - n; i++) {
        newArr.push(arr.slice(i,n));
        n++;
    }
    return newArr;
}
? 3.Writing a function which checks whether the today's expenditure is greater than or equal to twice   the median.
function checkFraud(median,subArr) {
    if(subArr[subArr.length -1] >= 2 * median) {
        return true;
    } else {
        return false;
    }
}
*/

// todo 3.Writing Actual Code

function fraudNotification(arr, n) {
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

function findMedian(arr) {
    let median = 0;
    let arrCopy = arr;
    arrCopy = arrCopy.sort((a, b) => a - b);
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

// * Working
// function getSubArr(arr, n) {
//     let newArr = [];
//     let breakpoint = n - 1
//     let end = n;
//     for (let i = 0; i < arr.length - breakpoint; i++) {
//         newArr.push(arr.slice(i, n));
//         n++;
//     }
//     return newArr;
// }

function checkFraud(median, value) {
    if (value >= 2 * median) {
        return true;
    } else {
        return false;
    }
}

// console.log(subArr([1, 2, 3, 4, 5, 6, 7, 8], 4));
// console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(fraudNotification([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
// console.log(checkFraud(2, [8, 4, 5]))



