/*

? Problem Statement : An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, U , or a downhill , D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
? A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
? A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
? Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 

* Input : 8 'UDDDUDUU' -> 1

*/
function countingValleys(steps, path) {
    let counter = 0;
    let valley = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            counter++;
        } else {
            counter--;
        }
        if (path[i] === 'U' && counter === 0) {
            valley += 1
        }
    }
    return valley;
}

console.log(countingValleys(10, 'DDUDDUUDUU')) // 1
console.log(countingValleys(1000, 'UUUUDUUDDDDDUUUDDUUDUDDDUUDUDUDDUDUDDUUUDDDUDDUDDDDDUUUDDUUDDDDDDDDDDDUUDDDDDDUUUUDUDUDDDDUDUDUUUDUDDDDUUDDDDDDDUUUUUUUDDUUUUUDUUUDUDUDDDDUUDDUDDDDDUDUDUDDDDUUDUDUDDUUDDDDDUDDUUUUDDDUUUDUUUUDUUDUDUDUUDUUDDDUDDUDDDDDDDUUDDUDDDDDUDUDDDUUDUDUDDUUUUUUDDUDDDDUDUDDDUDDDUUUUDDDDDDDUUDDDDUDUDUDDUUDDUUDUUDUUDDDUUUDDDDUDDDUDUDUDUUUDUDUDUDUUUUDDDUUDUUUUDUUDDUUDUDUDDUDDDDUUDDDDUDDUUUDUUDUDDDUUUDUUDDDUDUDUUDUUUUUDDDUUUUUDDDUUDDUDDDUUUUUUUUDDDUUDUDUUDUUDUDUUDDDDDUUUUDUDDUUUDUDDDDUUDUUUDUUUDDDDUUDDUUDUUUDDUDDUDDUDDUUDDDUDUUUUUUUDDDUDUDDUUUUUDDUDUDDDDDUDDDUDUDUDDDDDDDDUUDDUDUUUUDUUUDUUDDUUUDDDUUDUUDDUDUDDUUUUUUUDDUDDUDUDDDUUDUUUDDUUDDDDUUUUUDDUUDDDUUUDDDUUDDDDDUDUUUDDUDUDDUDDUUDDDDDUUUUDUDUUUUUUDUUDUUUDDUUUUUUDDDDUDUDUUDUDDDUUDDDUUUUUDDDDDUDUDDDDDUUDDDUDUUUDDDUUUUDDUUUUUUUDUDDUUDDUDDDDDDDDDDDUDUDUUDDDDUDUUUDUDUUDUUUDDDDDUUDUDUUUDDUDUUUUDDUUDDUDDUDUUUDDUDUUDUDUUDDDDDDUUDUDDDUUUUDDDDUUUUUDDUUUDUUDUUDUUUUDDUDDUDDUDUUUDDUDDDDDUUDDUDUUDUUDUUDUDUUDDUUDUDUUUUDUUDDDDUUDDUUDUUUDDUUUDUDDUUUUUUUUUUUUUUUUUUUUUUUU')) // 3

// Not Done

