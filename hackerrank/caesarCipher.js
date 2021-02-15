/*

? Problem Statement : Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

* Input : s = middle-Outz , k = 2 -> okffng-Qwvb
*/

function caesarCipher(str, k) {
    let result = [];
    if (k > 26) {
        k = k - (Math.floor(k / 26) * 26)
    }
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
    }
    // console.log(String.fromCharCode(109))
    // return result;
    for (let j = 0; j < result.length; j++) {
        if (result[j] > 64 && result[j] < 91) {
            if (result[j] + k > 90) {
                result[j] = String.fromCharCode((result[j] - 26) + k);
            } else {
                result[j] = String.fromCharCode(result[j] + k);

            }
        } else if (result[j] > 96 && result[j] < 123) {
            if (result[j] + k > 122) {
                result[j] = String.fromCharCode((result[j] - 26) + k);
            } else {
                result[j] = String.fromCharCode(result[j] + k);

            }
        }
        else {
            result[j] = String.fromCharCode(result[j]);

        }

    }
    return result.join('');
}

console.log(caesarCipher('middle-OutzZ', 2))
console.log(caesarCipher('www.abc.xy', 87))
console.log(caesarCipher('!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U', 62))

// okffng-QwvbZ