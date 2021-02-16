/*

? Problem Statement : Sunny and Johnny like to pool their money and go to the ice cream parlor. Johnny never buys the same flavor that Sunny does. The only other rule they have is that they spend all of their money.
? Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have. 

* Input : 6,  [1,3,4,5,6] -> [1,4]
* Input : 4,  [1,4,5,3,2] -> [1,4]
*/


function icecreamParlor(m, arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === m && i !== j) {
                return [i + 1, j + 1]
            }
        }
    }

}

console.log(icecreamParlor(6, [1, 3, 4, 5, 6]));
console.log(icecreamParlor(8, [1, 3, 4, 4, 6, 8]));