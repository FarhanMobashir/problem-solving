function luckBalance(k, arr) {

    let important = [];
    let unimportant = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === 1) {
            important.push(arr[i][0])

        } else if (arr[i][1] === 0) {
            unimportant.push(arr[i][0])
        }
    }
    // console.log(important);
    if (unimportant.length === 0) {
        let luck = 0;
        let lost = 0;
        important = important.sort((a, b) => b - a);
        for (let i = 0; i < important.length; i++) {
            if (i < k) {
                lost += important[i];
            } else {
                luck += important[i]
            }
        }
        return (lost - luck);
    } else {
        let luck = 0;
        let lost = 0;
        important = important.sort((a, b) => b - a);
        console.log(unimportant, important)
        for (let i = 0; i < unimportant.length; i++) {
            luck += unimportant[i]
        }
        for (let i = 0; i < important.length; i++) {
            if (i < k) {
                luck += important[i]

            } else {
                luck -= important[i]

            }
        }

        return luck;
    }
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])) // 29
console.log(luckBalance(5, [[13, 1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1], [18, 1], [13, 1]])) // 42
console.log(luckBalance(2, [[5, 1], [4, 0], [6, 1], [2, 1], [8, 0]])) // 21

