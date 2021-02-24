function asciiArr(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
    }
    return result;
}

function funnyString(s) {
    let reversed = [];
    for (let i = s.length - 1; i >= 0; i--) {
        reversed.push(s[i]);

    }
    reversed = reversed.join('');
    // console.log(reversed)
    let real = asciiArr(s);
    let rev = asciiArr(reversed);
    // console.log(real, rev)
    let diff1 = [];
    let diff2 = [];
    for (let i = 0; i < real.length - 1; i++) {
        diff1.push(Math.abs(real[i] - real[i + 1]));
        diff2.push(Math.abs(rev[i] - rev[i + 1]));

    }
    console.log(diff1, diff2)
    for (let i = 0; i < diff1.length; i++) {
        if (diff1[i] !== diff2[i]) {
            return 'Not Funny'
        }
    }
    return 'Funny'

}

console.log(funnyString('fmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury'))
console.log(funnyString('ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq'))
