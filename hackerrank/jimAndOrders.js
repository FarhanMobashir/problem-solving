function jimOrders(arr) {
    let serveTime = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!((arr[i][0] + arr[i][1]) in serveTime)) {
            serveTime[(arr[i][0] + arr[i][1])] = [];
            serveTime[(arr[i][0] + arr[i][1])].push(i + 1)
        }
        else {
            serveTime[(arr[i][0] + arr[i][1])].push(i + 1)
        }
    }
    let serve = Object.keys(serveTime);
    serve = serve.sort((a, b) => a - b);
    for (let i = 0; i < serve.length; i++) {
        if (serveTime[serve[i]].length === 0) {
            result.push(serveTime[serve[i]]);
        } else {
            serveTime[serve[i]] = serveTime[serve[i]].sort((a, b) => a - b);
            result.push(...serveTime[serve[i]]);
        }

    }
    console.log(serveTime)
    return result;

}

console.log(jimOrders([[8, 3], [6, 2], [2, 3], [5, 6], [4, 3]])) // 4 5 3 1 2
