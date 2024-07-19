console.log("Emb Javascript to a HTML file")

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lặp qua từng phần tử mảng bằng for làm thay đổi mảng
for (let i = 0; i < 10; i++) {
    arr[i] = arr[i] * arr[i]
}
console.log("use for with arr: ", arr)

// lặp bằng for ... in làm THAY ĐỔI mảng (vì lặp qua index của mảng) // for in lặp qua property (props), với mảng props là index, với đối tượng props là key
// for...in sẽ lặp qua cả các thuộc tính KẾ THỪA từ chuỗi nguyên mẫu.

for (let index in arr) {
    arr[index] = arr[index] * arr[index];
}
console.log("use for ... in with arr: ", arr)

// lặp bằng for ... of KHÔNG làm thay đổi mảng (vì chỉ lặp qua giá trị, không lặp qua index) // for of lặp value of props
// for...of không làm việc với các thuộc tính kế thừa từ chuỗi nguyên mẫu, nó chỉ lặp qua các giá trị của iterable.
for (let item of arr) {
    item = item * item
    console.log(item)
    //return item
}
console.log("use for ... of with arr: ", arr)


// lặp bằng map KHÔNG làm thay đổi mảng vì tạo ra 1 mảng khác và thao tác trên mảng mới mà
let mapArr = arr.map((item, index) => {
    item = item * item
    return item
})
console.log("mapArr: ", mapArr)
console.log("original arr: ", arr)