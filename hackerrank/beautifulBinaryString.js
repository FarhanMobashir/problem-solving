function beautifulBinaryString(str) {
    let counter = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] == '0' && str[i + 1] == '1' && str[i + 2] == '0') {
            counter++;
            i += 2
        }
    }

    return counter;
}
console.log(beautifulBinaryString('0100101010100010110100100110110100011100111110101001011001110111110000101011011111011001111100011101')) //10
console.log(beautifulBinaryString('0101000010011100111110011000001000100101100010000011010111111101110110001110111110110101001011')) //9
console.log(beautifulBinaryString('1110011110001100010100000011011101100001101010001111101101000010111111001110110000010110010011100010')) // 7

