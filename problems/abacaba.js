function aba(n) {
    if (n === 1) {
        return String.fromCharCode(64 + n);
    } else {
        return aba(n - 1) + String.fromCharCode(64 + n) + aba(n - 1);

    }
}
console.log(aba(5));