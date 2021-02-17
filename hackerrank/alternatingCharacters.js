function alternatingCharacters(s) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' && s[i + 1] === 'A') {
            counter++;
        } else if (s[i] === 'B' && s[i + 1] === 'B') {
            counter++
        }
    }
    return counter;

}