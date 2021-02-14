/*

? Problem Statement : An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, U , or a downhill , D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
? A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
? A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
? Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 

* Input : 8 'UDDDUDUU' -> 1

*/
function countingValleys(steps, path) {
    let prev = path[0];
    let valley = 0;
    for (let i = 1; i < steps - 2; i++) {
        if (prev === 'D' && path[i] === 'D' && path[i + 1] === "U") {
            valley++;
            i += 2;
        }
        prev = path[i + 1]
    }
    return valley;

}

console.log(countingValleys(12, 'DDUUDDUDUUUD'))
console.log(countingValleys(100, 'DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD'))
