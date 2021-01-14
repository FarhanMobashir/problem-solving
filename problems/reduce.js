// let arr = [2, 3, 4, 6, 9]

// let x = arr.map(i => i * 2);
// let y = arr.reduce((acc, val) => {
//     let sum = val * 2;
//     acc.push(sum)
//     return acc;
// }, [])

// let foo = arr.filter((val) => val % 2 === 0)
// let bar = arr.reduce((acc, val) => {
//     if (val % 2 === 0) {
//         acc.push(val)
//     }
//     return acc
// }, [])


// console.log(x);
// console.log(y);
// console.log(foo);
// console.log(bar);


function map(data, callback, arr = [], i = 0) {
    if (i > data.length - 1) {
        return arr;
    }
    return map(data, callback, arr.concat(callback(data[i])), i + 1)

}
function callback(item) {
    return item + 2;
}
console.log(map([1, 2, 3], callback))