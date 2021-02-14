function pow(m, n) {
    if (n === 0) {
        return 1;
    } else {
        return m * pow(m, n - 1);
    }
}

console.log(pow(2, 100));