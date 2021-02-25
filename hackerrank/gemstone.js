/*

? Problem Statement : Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.

* Input : ['abcdde', 'baccd', 'eeabg'] -> 2

*/


function myHashmap() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let obj = {}
    for (let i = 0; i < alphabet.length; i++) {
        if (!(alphabet[i] in obj)) {
            obj[alphabet[i]] = [alphabet[i]]
        }
    }
    return obj;
}

function gemstones(arr) {
    let result = 0;
    let my = myHashmap();
    for (let i = 0; i < my.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].includes[my[i]]) {
                counter++;
            }
        }
        if (counter === arr.length) {
            result++;
        }
    }
    return result;
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']))