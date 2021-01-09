// Define a function that checks if a number is prime or not

function isPrime(n) {
    if (n === 1) {
        return false
    } else if (n === 2) {
        return true
    } else {
        for (let i = Math.floor(n / 2); i > 1; i--) {
            if (n % i === 0) {
                return false
            }

        }
        return true;
    }

}

console.log(isPrime(9))