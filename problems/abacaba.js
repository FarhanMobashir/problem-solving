function aba(n) {
    if (n.length === ) {
        return String.fromCharCode(65);
    } else {
        return aba(n) + String.fromCharCode(65++) + aba(n);
    }
}

console.log(aba(1));