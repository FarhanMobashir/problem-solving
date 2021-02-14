/*

? Problem Statement : A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.
? The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

! Inputs
- n : the number of prisioners
- m : number of sweets
- s : the chair number to begin passing out sweets from 

* Input : n = 4, m = 6, s = 2 -> 3
*/

function saveThePrisoner(n, m, s) {
    let counter = s;
    for (let i = 0; i < m; i++) {
        if (counter > n) {
            counter = 1;
        }
        // console.log(counter);
        counter++;
    }
    // console.log(arr);
    return counter - 1;
}

console.log(saveThePrisoner(4, 6, 2));
console.log(saveThePrisoner(3, 7, 3));
console.log(saveThePrisoner(7, 19, 2));

