/*

? Problem Statement : Two words are anagrams of one another if their letters can be rearranged to form the other word. Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.



*/

function myHashmap(arr1) {
    let letterCount1 = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] in letterCount1)) {
            letterCount1[arr1[i]] = 1;
        } else {
            letterCount1[arr1[i]] += 1;
        }
    }
    return letterCount1;
}



function anagram(s) {
    if (s.length % 2 !== 0) {
        return -1;
    } else {
        s = s.split('');
        let left = s.slice(0, s.length / 2);
        let right = s.slice(s.length / 2, s.length);
        let leftObj = myHashmap(left);
        let rightObj = myHashmap(right);
        // console.log(leftObj, rightObj)
        let counter = 0;
        let iterator = Object.keys(leftObj);
        if (iterator.length === 1) {
            counter = right.length
        } else {
            for (let i = 0; i < iterator.length; i++) {
                if (!(iterator[i] in rightObj)) {
                    // console.log('hello')
                    counter += leftObj[iterator[i]];
                } else if (iterator[i] in rightObj) {
                    // console.log('hello')
                    if (leftObj[iterator[i]] > rightObj[iterator[i]]) {
                        counter += (leftObj[iterator[i]] - rightObj[iterator[i]]);
                    }
                    else {
                        counter += 0;
                    }
                }
            }
        }

        return counter
    }

}

console.log(anagram('aaabbb')) // 3
// console.log(anagram('ab')) // 1
console.log(anagram('xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa')) // -1
console.log(anagram('fdhlvosfpafhalll')) // 5
console.log(anagram('immceukpupwhgaosececxmueynudagpiudmyaxpuondunrortutthpzhftkfzbpvhdthckdqxgmkzbbvvxoeopmvjyakcrgjvzqxmvqjbcuafxvdwljnbvimwlwyccjzezzqwpzxtvzzvxetkninlrzhcwhgyqgerfunwwmptlqqkukxiukvlkcpilyibgnsnjhjhtabgrttnfqxaaslmwduhddijqcwblhjejmnafgqlwnlwiyjebfogiypadncowntgzgiemypkocgybrcexslhraiuqmimzdsyldezbwjryspzlueimrqdrazjmkwnpqlbtrcxnoomgenryrckiuqcurlidjvtaiwvzasnohbunoolgqxqmpuijiqmrnhtvdrugjjuskpfzfshxszjhurqcjfvwmprsinyrxsmhjtgomplgpwnjng')) // 0
// console.log(anagram('xaxbbbxx')) // 1
