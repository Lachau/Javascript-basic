console.log("Emb Javascript to a HTML file")

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [
    {
        name: "Huu Canh",
        amount: 25
    },
    {
        name: "Thi Sau",
        amount: 16
    },
    {
        name: "Minh Khai",
        amount: 20
    },
    {
        name: "Hong Phong",
        amount: 30
    }
]

let filter = arr.filter((item, index) => {
    //console.log(">>> check filter, item: ", item, "index: ", index)
    //return item && item > 5;
    return item.amount < 25;
});
console.log(filter)

// hàm filter trả về 1 array mới, không thay đổi array input, nếu không có phần tử thì trả về array rỗng

// hàm find trả về phần tử ĐẦU TIÊN match với điều kiện của arrat input, nếu không có trả về undefined
let find = arr.find((item, index) => {
    //console.log(">>> check filter, item: ", item, "index: ", index)
    //return item && item > 5;
    return item.amount > 55;
});
console.log(find)