// Define another function called "fourth_power" which uses "square" to calculate the fourth power of a number

function square(n) {
    return n * n;
}

function fourthPower(n) {
    return square(n) * square(n);
}

console.log(fourthPower(4));