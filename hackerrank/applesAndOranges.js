/*

? Problem Statement : determine the number of apples and oranges that land on Sam's house. 
- s = starting point of house
- t = endpoint of house
- a = location from apple tree
- b = location from orange tree
- apples = integer array, distances at which each apple falls from the tree. 
- oranges = integer array, distances at which each orange falls from the tree. 

todo Coming Up with the logic
? --> Breaking the problem
- finding the contraints in which apple or orange should fall = s->t
- picking thelocation of applle (a) and iterate over apples and check if they liw in the desired range
- same for the orange 
- keep count of both apple and orange
- finally print the desired output

*/

function checkLocation(num, start, end) {
    if (num >= start && num <= end) {
        return true;
    } else {
        return false;
    }
}

function iterator(location, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(location + arr[i]);
    }
    return result;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    let appleValue = iterator(a, apples);
    console.log(appleValue);
    let orangeValue = iterator(b, oranges);
    appleValue.forEach(function (item) {
        if (checkLocation(item, s, t)) {
            appleCount++;
        }
    })
    orangeValue.forEach(function (item) {
        if (checkLocation(item, s, t)) {
            orangeCount++;
        }
    })
    console.log(appleCount);
    console.log(orangeCount);

}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))