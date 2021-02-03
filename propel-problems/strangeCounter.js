/*

? Problem Statement : There is a strange counter. At the first second, it displays the number . Each second, the number displayed by decrements by until it reaches . In next second, the timer resets to --[2 * the initial num ber for the prior cycle]-- and continues counting down. The diagram below shows the counter values for each time in the first three cycles:

* Input : 4 -> 6

todo Coming Up With Logic
? --> Breaking the problem
- make a variable time set it to 1
- make a variable value set it to 3
- start incementing the time by 1 and decrementing the value by 1
- when value reaches 1 set the value to twice the initial value and repeat the process
- when again value reaches one set the value to twice the previous initial value
*/

function strangeCounter(t) {
    let start = 3;
    let initialValue = 3
    let time = 1;
    let result = {};
    for (let i = 0; i < t; i++) {

        // result[time] = initialValue;

        initialValue -= 1
        time += 1;
        if (initialValue === 0) {
            initialValue = 2 * start;
            start = initialValue
        }
    }
    return initialValue + 1;
}

// console.log(strangeCounter(4))
console.log(strangeCounter(1000000000000))
