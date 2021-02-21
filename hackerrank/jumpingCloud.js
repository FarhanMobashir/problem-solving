function jumpingOnClouds(c) {
    let jump = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0 && c[i + 2] === 0) {
            console.log('jump if :', jump)
            jump += 1;
            i += 1;
        } else if (c[i] === 0 && c[i + 2] !== 0 && c[i + 1] === 0) {
            console.log('jump else :', jump)
            jump += 1;
        }
    }
    return jump;
}

// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))
// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))

