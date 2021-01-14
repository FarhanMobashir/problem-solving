function fact(n) {
    if (n == 1) {
        return 1
    } else {
        console.log("n: " + n)
        let x = n * fact(n - 1);
        console.log("n: " + n)
        console.log(x)
        return x
    }
}

fact(5)