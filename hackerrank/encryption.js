/*

? Problem Statement : Create a function to encode a message.

* Input : haveaniceday -> hae and via ecy
* Input : chillout -> clu hlt io

*/

function encryption(s) {
    let len = s.length
    let root = Math.floor(Math.sqrt(len));
    let column;
    let row;
    let iterator = 0;
    if (root === Math.sqrt(s.length)) {
        console.log('hello')
        row = root;
        column = root;
        iterator = root;
    } else if (root * (root + 1) > s.length) {
        row = root;
        column = root + 1;
        iterator = root + 1;
    }
    else {
        row = root + 1;
        column = root + 1;
        iterator = root + 1;
    }
    let grid = [];
    console.log(row)
    let start = 0;
    for (let i = 0; i < row; i++) {

        if (row === root && column === root) {
            grid.push(s.slice(i * column, (i + 1) * column));
            // start += root;
            // column += root;
        } else {
            grid.push(s.slice(start, column));
            start += root + 1;
            column += root + 1
        }

    }
    let result = '';
    let counter = 0;
    console.log(grid)
    while (counter !== iterator) {
        // console.log(len)
        for (let i = 0; i < grid.length; i++) {

            if (grid[i][counter]) {
                result += grid[i][counter]
            }

        }
        result += ' '
        counter++;
    }
    return result;
}

// console.log(encryption('haveaniceday'))
console.log(encryption('chillout'))
console.log(encryption('wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny'))
// isieae fdtonf fotrga anoyec cttctt tfhhhs

