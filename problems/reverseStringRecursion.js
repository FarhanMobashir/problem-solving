function reverseString(str, arr = []) {

    if (str === '') {
        return arr.join('');
    }
    str = str.split("")

    arr.push(str.pop())
    str = str.join('');

    return reverseString(str, arr);
}

console.log(reverseString('hello my name is mobashir'))