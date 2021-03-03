function validPalindrome(str) {
    let re = /\s|\W/gi
    str = str.toLowerCase().replace(re, '');
    // console.log(str);
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    console.log(result.join(''), str)
    if (result.join('') === str) {
        return true;
    } else {
        return false;
    }
}

console.log(validPalindrome('A man, a plan, a canal: Panama'))