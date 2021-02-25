/*

? Problem Statement : There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first letters of the infinite string.

*/

function repeatedString(s, n) {
    if (s === 'a') {
        return n;
    } else {
        let counter = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'a') {
                counter++;
            }
        }
        console.log('counter', counter)
        let m = n % s.length;
        let l = Math.floor(n / s.length) * counter;
        for (let i = 0; i < m; i++) {
            if (s[i] === 'a') {
                l += 1;
            }
        }
        return l


    }

}

console.log(repeatedString('a', 1000000000000))
console.log(repeatedString('ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt', 685118368975))
