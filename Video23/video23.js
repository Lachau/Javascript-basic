console.log("Emb Javascript to a HTML file")

let array1 = [1, 2, 3, 4, 5]

let initial = 2;
let sumarr = array1.reduce((total, currentValue, currentIndex, arr) => {
    return total + currentValue
}, initial);

console.log("sumarr: ", sumarr);

// 0 + 1 + 2 + 3 + 4
// const initialValue = 10;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
// );

// console.log("sumWithInitial: ", sumWithInitial);
// // Expected output: 10
