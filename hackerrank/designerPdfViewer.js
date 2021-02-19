/*

? Problem Statemnet : When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle.

Complete the designerPdfViewer function in the editor below.

designerPdfViewer has the following parameter(s):

    int h[26]: the heights of each letter
    string word: a string

* Input : 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 , abc -> 9
* Input : 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 , zaba -> 28



*/

function myHashmap() {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let obj = {}
    for (let i = 0; i < alphabets.length; i++) {
        if (!(alphabets[i] in obj)) {
            obj[alphabets[i]] = i;
        }
    }
    return obj
}

function designerPdfViewer(h, word) {
    let alphabets = myHashmap();
    let max = h[alphabets[word[0]]];
    for (let i = 1; i < word.length; i++) {
        if (h[alphabets[word[i]]] > max) {
            max = h[alphabets[word[i]]]
        }
    }

    return max * word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'))
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))
