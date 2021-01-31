/*

? Problem Statement : You are given a 2-d array containing elements in pair representing the number of people getting on the bus and the number of people getting off the bus. Return how many people are still on the bus at the last stop.

* Input : [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]  -> Output : 17
* Input : [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]] -> 21
* Input : [[10,0],[3,5],[5,8]] -> Output : 5

todo Coming Up With Logic
? --> Breaking the problem
- looping through the array 
- making two varible one for getting on bus af one for getting off the bus
- keep adding till the last iteration
-finally find the difference
*/


function bus(arr) {
    let onBus = 0;
    let offBus = 0;
    for (let i = 0; i < arr.length; i++) {
        onBus += arr[i][0];
        offBus += arr[i][1]
    }
    return onBus - offBus
}

console.log(bus([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))
console.log(bus([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))