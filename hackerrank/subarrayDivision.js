
// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day [integeSqures]
// m: an integer, Ron's birth month [segment]

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

function birthday(s, d, m) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = sum(s.slice(i, i + m));
        if (sum === d) {
            counter += 1;
        }
    }
    return counter

}