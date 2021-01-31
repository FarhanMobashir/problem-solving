function zeroToONe(str) {
    str = str.toLowerCase().split(' ');
    let result = '';
    str.forEach(function (i) {
        if (i == 'zero') {
            result += '0'
        } else if (i == 'one') {
            result += 1;
        } else {
            return result += '';
        }
    })
    if (result.length % 8 !== 0) {
        return result.slice(0, result.length - result.length % 8);
    } else if (result.length % 8 == 0) {
        return result;
    }

}

console.log(zeroToONe('one Zero zero one zero zero one one one one one zero oNe one one zero one zerO'))