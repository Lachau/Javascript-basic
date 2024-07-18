console.log("Emb Javascript to a HTML file")

let sum = (a, b, callback) => {
    let tong = a + b;
    callback(tong);
}

let printsum = (message) => {
    console.log("Sum of 6 + 9 = ", message)
}

sum(6, 9, printsum)
