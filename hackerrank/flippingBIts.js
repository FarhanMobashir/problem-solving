function flippingBits(n) {
    n = n.toString(2);
    let extraBits = '0'.repeat(32 - n.length)
    n = extraBits.concat(n);
    n = n.split("");
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '0') {
            n[i] = '1'
        } else if (n[i] === '1') {
            n[i] = '0'
        }
    }
    n = n.join('');

    return decimalToBinary(n);

}

function decimalToBinary(str) {
    let result1 = 0;
    let counter = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        result1 += parseInt(str[i]) * Math.pow(2, counter)
        counter++
    }
    return result1;




}



console.log('pow', Math.pow(2, 32))

console.log(flippingBits(4));
console.log(flippingBits(123456));
console.log(flippingBits(0));
